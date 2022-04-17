const puppeteer = require('puppeteer')
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    // const browser = await puppeteer.launch()
    // const page = await browser.newPage()
    // const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes'
    // await page.goto(vgmUrl)

    // const links = await page.$$eval('a', elements => elements.filter(element => {
    //   const parensRegex = /^((?!\().)*$/
    //   return element.href.includes('.mid') && parensRegex.test(element.textContent)
    // }).map(element => element.href))

    // links.forEach(link => console.log(link))

    // await browser.close()
    return res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    res.statusCode = 404
    return res.json({
      name: error.message
    })
  }
}
