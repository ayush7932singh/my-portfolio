import educationStrings from "@/strings/pages/Education";
import { EducationStrings } from "@/types/pages/Education";

type DegreeIndex = keyof EducationStrings["degrees"];
type DegreeFields = keyof EducationStrings["degrees"]["first"];

const getDegreeFieldNames = (
    language: string,
    index: DegreeIndex,
    field: DegreeFields
): string => {
    const lang = language.includes("en-us") ? "en" : "br";
    return educationStrings[lang]["degrees"][index][field] as string;
}

export default getDegreeFieldNames;