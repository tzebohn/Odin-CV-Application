import universities from "../data/world_universities_and_domains.json"

// Filter out only colleges in the USA
const usaUnis = universities.filter(uni => uni.country === "United States")
export const usaUniversityOptions = usaUnis.map(uni => ({ // react-state needs a label and value
    label: uni.name, 
    value: uni.name
}))

