const cheerio = require('cheerio') // 1

export default async (req, res) => { // 2
  if (req.method === 'GET') { // 3
    // const username = req.body.TWuser

    try { // 4
      const response = await fetch(`https://shopee.sg/Watch-Strap-for-Apple-Watch-Stainless-Steel-Bracelet-Series-1-2-3-4-5-6-7-SE-45mm-44mm-42mm-41mm-40mm-38mm-i.344726814.11762454429`)
      const htmlString = await response.text()
      // const $ = cheerio.load(htmlString)
      const $ = cheerio.load('<h2 class="title">Hello world</h2>');
      $('h2.title').text('Hello there!');
      $('h2').addClass('welcome');
      // const searchContext = `a[href='/imgyf/followers']`
      // const followerCountString = $(searchContext)
      //   .text()
      //   .match(/[0-9]/gi)
      //   .join('')

      res.statusCode = 200
      return res.json({
        // html: htmlString,
        response: $.html()
      })
    } catch (e) { // 5
      res.statusCode = 404
      return res.json({
        user: 'imgyf',
        error: `imgyf not found. Tip: Double check the spelling.`,
        followerCount: -1,
      })
    }
  }
}
