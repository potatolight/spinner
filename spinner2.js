// process.stdout.write('hello from spinner1.js... \rheyyy\n'

let arr = ['|', '/', '-',"\\","|", "=> d2 "]
for(let i = 0; i < 6; i++){
let time = i*300
setTimeout(() => {
  process.stdout.write('\r'+arr[i]);
}, time);}

setTimeout(()=>{
  process.stdout.write('\n')
}, arr.length*300)


// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);  

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\|   '); 
// }, 900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\=> d2  '); 
// }, 1100);
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\n'); 
// }, 1200);