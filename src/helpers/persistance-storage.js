export const setItem = (key, data) => {
  try {
    localStorage(key, data);
  } catch (error) {
    console.log(error);
  }
};
