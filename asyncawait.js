console.time('timer3');
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
        console.log('We have the ' + banana);
        getApple()
            .then(apple => {
                console.log('We have the ' + apple);
                console.log(addFruit(banana, apple));
                console.timeEnd('timer2')
            });
    });


console.log('::End::');