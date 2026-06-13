import { EducationStrings } from "@/types/pages/Education";

const educationStrings:Record<"en" | "br", EducationStrings> = {
    en: {
        degrees: {
            first: {
                name: "Bachelor of Computer Applications - BCA (Hons)",
                university: "Goel Institute of Higher Studies",
                location: "Lucknow, Uttar Pradesh",
                cgpa: "7.4 CGPA",
                start: "July 2021",
                end: "June 2024"
            },
            second: {
                name: "Master of Computer Applications - MCA",
                university: "Noida Institute of Engineering & Technology",
                location: "Greater Noida, Uttar Pradesh",
                cgpa: "7.5 CGPA",
                start: "August 2024",
                end: "Present"
            }
        }
    },
    br: {
        degrees: {
            first: {
                name: "Bacharelado em Aplicações de Computador - BCA (Hons)",
                university: "Goel Institute of Higher Studies",
                location: "Lucknow, Uttar Pradesh",
                cgpa: "7.4 CGPA",
                start: "Julho 2021",
                end: "Junho 2024"
            },
            second: {
                name: "Mestrado em Aplicações de Computador - MCA",
                university: "Noida Institute of Engineering & Technology",
                location: "Greater Noida, Uttar Pradesh",
                cgpa: "7.5 CGPA",
                start: "Agosto 2024",
                end: "Presente"
            }
        }
    }
};

export default educationStrings;