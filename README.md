# TL;DR

It uses postHTML to turn ...

```
<div class="flex items-center">
  some text
</div>
```

into ...

```
  <div class="tw-flex tw-items-center">
    some text
  </div>
```
.

Because sometimes you'll end up writing CSS/HTML with tailwind, then you have to utilise it's `prefix` option because of conflicting class names. This just saves you having to update all your class names.


Use it with

```
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
```