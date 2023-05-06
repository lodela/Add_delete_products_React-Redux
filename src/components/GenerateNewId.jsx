const generateId = () => {
  const chars =
    "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz0123456789!@#$%^&*()_=+?.<>";
  const idLength = 8;
  let id = "";

  for (let i = 0; i < idLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    id += chars.substring(randomNum, randomNum + 1);
  }
  return id;
};

export const idGenerator = () => {
  return generateId();
};
