# HTML code snippet and copy code button

[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/zyone-idn/HTML-code-snippet-and-copy-code-button/blob/main/LICENSE)
[![GitHub package version](https://img.shields.io/github/package-json/v/zyone-idn/HTML-code-snippet-and-copy-code-button.svg)](https://github.com/zyone-idn/HTML-code-snippet-and-copy-code-button)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zyone-idn/HTML-code-snippet-and-copy-code-button/blob/main/LICENSE)

## Demo
<img src="https://github.com/zyone-idn/HTML-code-snippet-and-copy-code-button/raw/main/image-demo.png" alt="demo code snippet">

[Demo](https://github.com/zyone-idn/HTML-code-snippet-and-copy-code-button/blob/main/demo.html)

## Getting Started
Add JavaScript Prismjs version 1.26
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/prism.min.js"></script>
```
Add the css code below:
```css
@import url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500;700&display=swap');
:root{ --fontCode:'Fira Mono', monospace;}
code:not(pre) {padding:0 4px;background:#0f172a;border-radius:2px;}
code, pre{font-family:var(--fontCode);color:#fff;font-size:0.9em}
pre {background:#020617;border-radius:2px;border-radius:3px;position:relative;padding-top:40px;margin:10px 0}
pre code {background:#0f172a;display:block;overflow:auto;padding:16px;border-radius:0 0 3px 3px;line-height:20px}
pre[data-language]:before {content:attr(data-language);display:inline-block;font-size:0.95em;height:40px;color:#fff;position:absolute;top:0;left:0;padding:0 16px;line-height:40px;border-bottom:1.5px solid #0b57cf;background:#0f172a}
pre button {display:inline-block;border-radius:1px;height:20px;line-height:20px;position:absolute;top:10px;right:16px;border:none;font-size:0.95em;background:transparent;cursor:pointer}
pre button svg {fill:none;width:20px;stroke:#fff;stroke-width:1.5;stroke-linecap:round:stroke-linejoin:round;}
pre button span {display:inline-block;position:absolute;padding:0 4px;border-radius:2px;bottom:125%;left:50%;color:#fff;transform:translateX(-50%);background:#0b57cf;font-size:0.6em;transition:all.4s ease-in-out}
pre button span::after {content:"";position:absolute;top: 100%; left:50%;  margin-left: -5px;border-width: 5px; border-style: solid;border-color: #0b57cf transparent transparent transparent;}
pre button:hover span{visibility:visible;}
```
add the JavaScript below:
```js
const copyButtonLabel = "<svg class='line' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g><line x1='9.61538' y1='16.74726' x2='14.38462' y2='16.74726'></line><line x1='8' y1='13.23627' x2='16' y2='13.23627'></line><path d='M98.87079,256.7981a5.00083,5.00083,0,0,1,4.40779,4.9653v8a5,5,0,0,1-5,5h-6a5,5,0,0,1-5-5v-8a5.00051,5.00051,0,0,1,4.55373-4.98036' transform='translate(-83.27858 -252.76339)'></path><rect x='8.7738' y='2' width='6.4524' height='3.96703' rx='1.98351'></rect></g></svg>";
var copyCopied = "<span>Copied</span>";
let blocks = document.querySelectorAll("pre");
blocks.forEach((block) => {
 if (navigator.clipboard) {
  let button = document.createElement("button");
  button.innerHTML = copyButtonLabel;
  block.appendChild(button);
  button.addEventListener("click", async () => {
   await copyCode(block, button);
  });
 }
});
async function copyCode(block, button) {
 let code = block.querySelector("code");
 let text = code.innerText;
 await navigator.clipboard.writeText(text);
 button.innerHTML += copyCopied;
 setTimeout(() => {button.innerHTML = copyButtonLabel;}, 700);
}
```

## Writing

```html
<pre data-language="HTML"><code></code></pre>
```
In the `data-language` attribute, please adjust the value according to the language that will be used or adjust it to your liking

