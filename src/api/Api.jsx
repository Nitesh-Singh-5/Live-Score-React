const API_KEY = "9c2zqsVBkIVUsyyZE1uniGqcvUJ3";

// Get all the matches [upcoming matches]

export const getMatches = () => {
  const url = `https://cricapi.com/api/matches/?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
};
