const API_KEY = "6bc9e708eafa4f4ea56131849240708";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  const queryStringURL = `${BASE_URL}&q=${city}`;

  try {
    const jsonRes = await fetch(queryStringURL);
    const data = await jsonRes.json();

    return data
  } catch (error) {
    console.log(error.message);
  }
};


export {

  show,
}