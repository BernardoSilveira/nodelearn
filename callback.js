console.time('timer');
const getBanana = function (callback) {
    setTimeout(() => {
        callback('banana');
    }, 2000);
};

const getApple = function (callback) {
    setTimeout(() => {
        callback('apple');
    }, 1000);
};

const addFruit = function (fruit1, fruit2) {
    return fruit1 + ' ' + fruit2;
}

console.log('::Start::');

getBanana(banana => {
    console.log('We have the ' + banana);
    getApple(apple => {
        console.log('We have the ' + apple);
        console.log(addFruit(banana, apple));
        console.timeEnd('timer');
    });
});

console.log('::End::');