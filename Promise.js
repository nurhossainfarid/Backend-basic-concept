// 3 Stags in promise
/* 
 1. pending promise
 2. resoled promise
 3. rejected promise
 */

const myPromise = new Promise((resoled, rejected) => {
    const user = 5;
    if (user) {
        setTimeout(() => {
            resoled("Farid");
        }, 1000)
    } else {
        rejected("Something went wrong");
    };
});

const userIds = [1, 2, 3, 4, 5, 6, 7];
let userData = [];

for (let i = 0; i < userIds.length; i++) {
    const userId = userIds[i];
    userData.push(myPromise);
}

Promise.all(userData).then(res => {
    console.log(res);
})


myPromise
    .then(res => console.log("Found in then : ", res))
    .catch(err => console.log("Found in catch : ", err))

console.log("Done");