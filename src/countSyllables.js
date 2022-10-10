import syllables from "syllables";

// eslint-disable-next-line no-unused-vars
const countJapaneseSyllables = (paragraph) => {
  throw "Japanese is not currently implemented.";
};

const countEnglishSyllables = (paragraph) => {
  const regexSolution = (word) => {
    return (
      word
        .replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, "")
        .replace(/^y/, "")
        .match(/[aeiouy]{1,2}/g) || []
    ).length;
  };
  return paragraph
    .split(" ")
    .map((word) => syllables(word) || regexSolution(word))
    .reduce((total, curr) => total + curr);
};

const countSyllables = (language, paragraph) => {
  const fn =
    language.toUpperCase() === "JP"
      ? countJapaneseSyllables
      : countEnglishSyllables;
  return fn(paragraph);
};

export default countSyllables;
