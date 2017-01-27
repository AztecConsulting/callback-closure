

// const add = (function () {
//     let a = 0;
//     return function () {
//         return a+=1
//     }
// })();

function foo() {
    let a = 0;
    setInterval(function() {
        console.log(a+=1);
    },2000)
}

foo();