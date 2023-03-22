const cheerio = require('cheerio')
const axios = require('axios')

const superLottoPlusResults = 'https://www.lotteryusa.com/california/super-lotto-plus/'


axios.get(superLottoPlusResults)
  .then(response => {
    const $ = cheerio.load(response.data);
    const cards = $('.c-result-card').text();
 
    console.log(cards);
  })
  .catch(error => {
    console.log(error);
  });