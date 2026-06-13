export type EducationStrings = {
    degrees: {
        first: {
            name: string;
            start: string;
            end: string;
            university: string;
            location: string;
            cgpa: string;
        };
        second: {
            name: string;
            start: string;
            end: string;
            university: string;
            location: string;
            cgpa: string;
        };
    };
};

export type EducationItems<T> = {
    index: number;
    label: T;
    course: T;
    website: T;
    university: T;
    location: T;
    cgpa: T;
    start: T;
    end: T;
};

export type CertificationItems<T> = {
    index: number;
    title: T;
    school: T;
    icon: T;
    issuance: T;
    credential: T;
    competences: {index: number; name: T}[];
};