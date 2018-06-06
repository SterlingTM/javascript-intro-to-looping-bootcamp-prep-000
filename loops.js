<<<<<<< HEAD
var forLoop = foop;

function foop(array) {
  for (let i = 0; i < 25; i++) {
  array.push(`"I am ${i} strange loops"`);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done';
}

function doWhileLoop(array) {
    function maybeTrue() {
     return Math.random() >= 0.5;
    }
     do {
       array.shift();
       return array;
     } while (maybeTrue());
=======


function forLoop(array) {
  for (let i = 0; i < 25; i++) {
   if (i = 1) return "I am ${i} strange loop. {i === 0 ? '' : 's'}";
   else return "I am ${i} strange loops. {i === 0 ? '' : 's'}"
  }
>>>>>>> b35f2f942a1bcb18cdd145277fbe2d799f7363e8
}