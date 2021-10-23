## PuppeteerWrapper
### Description
A Class that wraps a Headless Chrome browser (using Puppeteer) and its pages and exposes simple methods to help retrieve HTML from lists of links.


### PuppeteerWrapper Class
#### Attributes
| Attribute   | Description |
| :---------- | ----------- |
| pages       | An Array[Object] that holds pages and page metadata |
| browser     | A Puppeteer browser |


#### Methods
| Method      | Description |
| :---------- | ----------- |
| init ()<br />returns: Promise.resolve(`undefined`) | Async method that must be called after initializing a new `PuppeteerWrapper`.<br />It sets `this.pages` to an empty Array and sets `this.browser` after awaiting<br />the launch of a new Puppeteer browser. |
| getBrowser ()<br />returns: Object | Getter that returns `this.browser` Object, which contains a Puppeteer browser<br />and metadata |
| getPages ()<br />returns: Array[Object] | Getter that returns `this.pages` Array, which contains a list of page Objects with<br />Puppeteer pages and metadata |
| getPageCount ()<br />returns: Number | Returns `this.pages.length` |
| getPageById (id)<br />returns: Object | Returns the page Object with a given Number `id` |
| getPageByName (name)<br />returns: Object | Returns the page Object with a given String `name` |
| closePages ()<br />returns: Promise.resolve(`undefined`) | Loops through `this.pages`, closing every Puppeteer page, and then empties<br />`this.pages` |
| teardown ()<br />returns: Promise.resolve(`undefined`) | Closes all pages, and then closes `this.browser` |
| openPages (num)<br />returns: Promise.resolve(`undefined`) | Opens Number `num` Puppeteer pages and adds them to `this.pages` |
| getDOM (urls)<br />returns: Promise.resolve(String or Array[String]) | Can be called with a single URL Object (containing String URL,<br />and String GPU name), or an Array of URL Objects. Will return<br />the HTML for the single URL/list of URLs. |

----------------------------------------------------------------------

## Testing
Testing is executed using [Jest](https://jestjs.io/). All test files are maintained in the `GPUPriceChecker/test/` directory. To run unit tests, run `npm run test`.

----------------------------------------------------------------------

## Code Style
All code is styled using [JavaScript Standard Style](https://standardjs.com/).
