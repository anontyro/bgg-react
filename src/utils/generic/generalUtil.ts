export const isObjectEmpty = (obj?: object) => {
  if (!obj) {
    return false;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
