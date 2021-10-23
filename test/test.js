const PuppeteerWrapper = require('../PuppeteerWrapper')

const main = async () => {
  const pw = new PuppeteerWrapper()
  await pw.init()

  console.log(await pw.getDOM({
    url: 'https://www.google.com/',
    name: 'Google',
    querySelector: 'div'
  }))
}

main()
