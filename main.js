const posthtml = require('posthtml')

const html = `
  <div class="flex items-center">
    some text
  </div>
`

const result = posthtml()
  .use(require('./tailwind-posthtml-auto-tw-prefixer.js')())
  .process(html, { sync: true })
  .html

console.log(result)