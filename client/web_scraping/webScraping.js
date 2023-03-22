const cheerio = require('cheerio')
const axios = require('axios')

const superLottoPlusResults = 'https://www.lotteryusa.com/california/super-lotto-plus/'


axios.get(superLottoPlusResults)
  .then(response => {
    const $ = cheerio.load(response.data);
    $('.c-result-card').each((i, el) => {
        let nums = ''
        $(el).find('ul').children().each((i, num) => {
            nums += $(num).text().concat(', ').trim()
        })
        console.log($(el).find('time').text(), nums)
    })

  })
  .catch(error => {
    console.log(error);
  });