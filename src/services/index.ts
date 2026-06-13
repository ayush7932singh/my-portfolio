export interface UserInfoItems {
    publicRepos: number;
    privateRepos: number;
};

interface GitHubServiceItems {
    getGitHubUserInfo: () => Promise<UserInfoItems | {}>;
    getGitHubCommitInfo: () => Promise<number[] | []> ;
};

const gitHubService = ():GitHubServiceItems => {
    const 
        token: (string | undefined) = process.env.NEXT_PUBLIC_GPAT,
        user: string = process.env.NEXT_PUBLIC_GUSER || "ayush7932singh";
    
    const getHeaders = () => {
        const headers: HeadersInit = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `token ${token}`;
        return headers;
    };
    
    const getGitHubUserInfo = async():Promise<UserInfoItems | {}> => {    
        try {
            const response = await fetch(`https://api.github.com/users/${user}`, {
                method: 'GET',
                headers: getHeaders()
            });
    
            if (!response.ok) {
                return {
                    publicRepos: 0,
                    privateRepos: 0
                };
            }
            
            const { public_repos: publicRepos, total_private_repos: privateRepos } = await response.json();

            return {
                publicRepos: parseInt(publicRepos) || 0,
                privateRepos: parseInt(privateRepos) || 0
            };
        } catch(error:any) {
            return {
                publicRepos: 0,
                privateRepos: 0
            };
        }
    }

    const getGitHubRepoInfo = async():Promise<string[] | []> => {
        try {
            const url = token ? `https://api.github.com/user/repos?visibility=all` : `https://api.github.com/users/${user}/repos?per_page=100`;
            const response = await fetch(url, {
                method: "GET",
                headers: getHeaders()
            });
    
            if (!response.ok) {
                return [];
            }

            return (await response.json()).map((info:any) => info.name);
        } catch(error:any) {
            return [];
        }
    }

    const getGitHubCommitInfo = async():Promise<number[] | []> => {
        try {
            const repos = await getGitHubRepoInfo();
        
            return await Promise.all(repos.map(async(repo:string):Promise<number> => {
                try {
                    let
                        allCommits:any[] = [],
                        page = 1,
                        hasMoreCommits = true;

                    while(hasMoreCommits) {
                        const response = await fetch(`https://api.github.com/repos/${user}/${repo}/commits?per_page=100&page=${page}`, {
                            method: 'GET',
                            headers: getHeaders()
                        });
    
                        if (!response.ok) return 0;
    
                        const commits = await response.json();
                        allCommits = allCommits.concat(commits);
                        
                        hasMoreCommits = commits.length === 100;
                        page++;
                    }

                    return allCommits.length;
                } catch(error:any) {
                    return 0;
                }
            }));
        } catch(error:any) {
            return [];
        }
    }

    return { getGitHubUserInfo, getGitHubCommitInfo };
}

export {
    gitHubService
};