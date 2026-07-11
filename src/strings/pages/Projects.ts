import { ProjectStrings } from "@/types/pages/Projects";

const projectStrings: Record<"en-us" | "br", ProjectStrings> = {
    "en-us": {
        first: {
            title: "HealthEase",
            category: "Fullstack Project",
            description: "Architected a full-stack web application managing 100+ patient records using the MVC design pattern; enforced role-based access control for 3+ user roles including Admin, Doctor, and Patient. Designed 10+ RESTful APIs with Flask and a normalized MySQL schema, improving data retrieval performance by 30 percent."
        },
        second: {
            title: "myBot",
            category: "AI Project",
            description: "Integrated OpenAI API achieving 95 percent+ response accuracy; optimized 50+ concurrent asynchronous API calls with robust error handling and deployed the application for real-time production usage."
        },
        third: {
            title: "Rock Paper Scissors",
            category: "Console Game",
            description: "A console-based Rock Paper Scissors game built using Java and Object-Oriented Programming concepts. Features score tracking and clean game logic using OOP principles like encapsulation and inheritance."
        },
        fourth: {
            title: "Exam DNA",
            category: "Frontend Web App",
            description: "A modern React frontend application built for the Exam DNA platform. Features a responsive UI and seamless user experience."
        }
    },
    br: {
        first: {
            title: "HealthEase",
            category: "Projeto Fullstack",
            description: "Projetou uma aplicação web full-stack gerenciando mais de 100 registros de pacientes usando o padrão de design MVC; aplicou controle de acesso baseado em funções para mais de 3 funções de usuário, incluindo Admin, Médico e Paciente. Desenvolveu mais de 10 APIs RESTful com Flask e um esquema MySQL normalizado, melhorando o desempenho de recuperação de dados em 30%."
        },
        second: {
            title: "myBot",
            category: "Projeto de IA",
            description: "Integrou a API da OpenAI alcançando mais de 95% de precisão de resposta; otimizou mais de 50 chamadas de API assíncronas concorrentes com tratamento de erros robusto e implantou a aplicação para uso em produção em tempo real."
        },
        third: {
            title: "Pedra Papel Tesoura",
            category: "Jogo de Console",
            description: "Um jogo de Pedra Papel Tesoura baseado em console, desenvolvido com Java e conceitos de Programação Orientada a Objetos. Possui rastreamento de pontuação e lógica de jogo limpa usando princípios de POO como encapsulamento e herança."
        },
        fourth: {
            title: "Exam DNA",
            category: "App Web Frontend",
            description: "Uma aplicação frontend moderna em React construída para a plataforma Exam DNA. Apresenta uma interface responsiva e uma experiência de usuário perfeita."
        }
    }
};

export default projectStrings;