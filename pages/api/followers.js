const cheerio = require('cheerio') // 1

export default async (req, res) => { // 2
  if (req.method === 'GET') { // 3
    // const username = req.body.TWuser

    try { // 4
      const response = await fetch('https://www.lazada.sg/products/dream-s-stretch-hiking-pants-men-summer-quick-dry-trousers-outdoor-joggers-cago-pants-male-travel-fishing-trekking-pants-i1398052965-s6324058177.html?laz_trackid=2:mm_150070944_51552096_2010602086:clkgg27f41g1e22tfn402v&mkttid=clkgg27f41g1e22tfn402v')
      const htmlString = await response.text()
      const $ = cheerio.load(htmlString)
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
        error: 'imgyf not found. Tip: Double check the spelling.',
        followerCount: -1
      })
    }
  }
}
