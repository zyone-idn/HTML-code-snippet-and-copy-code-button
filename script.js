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
