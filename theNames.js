import fs from "fs";

const json = JSON.parse(fs.readFileSync('./name-formats.json', 'utf8'))
export const adjectives = json.adjectives
export const adverbs = json.adverbs
export const nouns = json.nouns
export const prepositions = json.prepositions
export const verbs = json.verbs
export const firstNames = json.first_names
export const lastNames = json.last_names