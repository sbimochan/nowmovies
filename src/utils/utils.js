export const textTruncate = (text = "", length = 250) => {
  const ending = "...";

  if (length === null) {
    length = 100;
  }

  if (text?.length > length) {
    return text.substring(0, length - ending?.length) + ending;
  } else {
    return text;
  }
};
