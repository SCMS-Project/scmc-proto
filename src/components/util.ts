export const capitalizeFirstLetter = (str: string) => {
  const modifiedStr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

    return modifiedStr;
};