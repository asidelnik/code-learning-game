# Code learning game
## What
1. Learn what you need
2. Write your notes in a spreadsheet
3. Convert that spreadsheet to a personal test site

## How
1. Fork this repository
2. Convert your notes from a spreadsheet to a json file
3. Replace src/data/all-exercises.json with your notes json file
4. Deploy the site to github pages: npm run deploy

## Spreadsheet columns / JSON array type
```
export type FilteredExceriseType = {
  domain: string;
  subDomain: string;
  question: string;
  answers: string[];
};
```
