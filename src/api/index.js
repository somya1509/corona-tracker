import axios from "axios";
const SecretKey = process.env.REACT_APP_SECRET_KEY;

var options = {
  method: "GET",
  url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
  headers: {
    "x-rapidapi-key": SecretKey,
    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
  },
};

export const fetchData = async () => {
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {}
};
