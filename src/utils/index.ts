export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const generateCombination = (): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let combination = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    const letter = alphabet[randomIndex];
    combination += letter;
  }

  return combination;
};

export const truncateName = (name: string, maxLength: number) => {
  if (name.length <= maxLength) {
    return name; // No need to truncate
  } else {
    return name.slice(0, maxLength - 3) + "..."; // Truncate and add ellipsis
  }
}
