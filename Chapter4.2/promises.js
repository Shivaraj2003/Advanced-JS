// let promise = new Promise((resolve,reject)=>{
//     console.log('Good');
//     resolve(123);
// });

// console.log(promise);

function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data :', id);
            resolve('sucess');

        }, 2000);
    })
}

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res));
// });


//Promise Chain
getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    console.log(res);
})