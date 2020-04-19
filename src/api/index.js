import axios from 'axios';

export const fetchQuotes = async () => {
  try {
    const {data} = await axios({
      method: 'GET',
      url: `https://type.fit/api/quotes/`,
    })

    return data
  } catch(e) {
    console.error(e);
  }
}
