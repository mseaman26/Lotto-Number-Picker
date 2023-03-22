const cheerio = require('cheerio')
const axios = require('axios')

const superLottoPlusResults = 'https://www.lotteryusa.com/california/super-lotto-plus/'


axios.get(superLottoPlusResults)
  .then(response => {
    const $ = cheerio.load(response.data);
    $('.c-result-card').each((i, el) => {
        let nums = []
        $(el).find('ul').children().each((i, num) => {
            nums.push($(num).text().trim())
        })
        for(let i = 0; i < nums.length; i++){
            nums[i] = nums[i].split('\n')[0]
        }
        console.log($(el).find('time').text(), nums)
        console.log(nums.length)
    })

  })
  .catch(error => {
    console.log(error);
  });