console.time('timer2');
console.time('extraTimer1');

const getBanana = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('banana');
        }, 2000);
    });

};

const getApple = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('apple');
        }, 1000);
    });
};

const addFruit = function (fruit1, fruit2) {
    return fruit1 + ' ' + fruit2;
}

console.log('::Start::');

getBanana()
    .then(banana => {
        console.log('We have the ' + banana + ' (1)');
        getApple()
            .then(apple => {
                console.log('We have the ' + apple + ' (1)');
                console.log(addFruit(banana, apple) + ' (1)');
                console.timeEnd('timer2');
            });
    });


Promise.all([getBanana(), getApple()]).then(result => {
    const banana = result[0];
    const apple = result[1];

    console.log('We have the ' + banana + ' (2)');
    console.log('We have the ' + apple + ' (2)');
    console.log(addFruit(banana, apple) + ' (2)');
    console.timeEnd('extraTimer1');
})


console.log('::End::');