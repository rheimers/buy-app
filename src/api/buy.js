export const getBuys = async () => {
  const response = await fetch("http://localhost:7000/buy");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
