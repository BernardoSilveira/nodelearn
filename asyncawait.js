console.time('timer3');
console.time('extraTimer2');
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
};

const asyncFruitsNormal = async function () {
    const banana = await getBanana();
    console.log('We have the ' + banana + ' (1)');
    const apple = await getApple();
    console.log('We have the ' + apple + ' (1)');
    console.log(addFruit(banana,apple) + ' (1)');
    console.timeEnd('timer3');
};

const asyncFruitsAll = async function () {
    const [banana, apple] = await Promise.all([getBanana(), getApple()]);
    console.log('We have the ' + banana + ' (2)');
    console.log('We have the ' + apple + ' (2)');
    console.log(addFruit(banana,apple) + ' (2)');
    console.timeEnd('extraTimer2');
};

console.log('::Start::');

asyncFruitsNormal();
asyncFruitsAll();

console.log('::End::');