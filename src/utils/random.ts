/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export async function getRandomWord(): Promise<string> {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
    const data = await response.json();
    return data[0];
  }
  
  export async function generateRandomName(): Promise<string> {
    const word1 = await getRandomWord();
    const word2 = await getRandomWord();
    return `${word1}-${word2}`;
  }