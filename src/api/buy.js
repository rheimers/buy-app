export const getBuys = async () => {
  const response = await fetch("http://localhost:7000/buy");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const postBuy = async (buy) => {
  const response = await fetch("http://localhost:7000/buy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buy),
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};
