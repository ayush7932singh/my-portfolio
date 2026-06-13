import projectStrings from "@/strings/pages/Projects";
import { ProjectStrings } from "@/types/pages/Projects";

type ProjectField = keyof ProjectStrings;
type ProjectFieldKeys = keyof ProjectStrings["first"];

const getProjectsFieldNames = (
    language: string,
    field: ProjectField,
    type: ProjectFieldKeys
): string => {
    const lang = language.includes("en-us") ? "en-us" : "br";
    return projectStrings[lang][field][type] as string;
}

export default getProjectsFieldNames;