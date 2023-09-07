// let pattern = /^is/m;

// let text =`Is My name is Sarfaraz`;
// // console.log(pattern.test(x))             
// console.log(text.match(patterns))

// let pattern = /h.t/g;

// let text = "hat";

// console.log(pattern.test(text));

            // EMAIL VALIDATION

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//      let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//      const isValidEmail = pattern.test('alexsaim919@gmail.com');
//      const isInvalidEmail = pattern.test('alexsaim919@gmail.com');

//      console.log(isValidEmail, isInvalidEmail); 

         // MOBILE NUMBER VALIDATION

// let text = "+923302313679";
// let pattern = /^(\+92|0)3\d{2}[ -]?\d{7}$/;

// console.log(pattern.test(text))

//  let text = "123StreetLandhi,Sharafi";
//  let pattern = /^\d+\s[A-z]+\s,[A-z]+$/

//  console.log(pattern.test(text))

// WEB WORKER THEORY


let result;

for(let i =0; i < 1000000000; i++){
    result +=1;
}

console.log(result);

const mywork = new Worker("thread.js");

mywork.onmessage= event =>{
console.log(event.data);
}

mywork.postMessage("start");