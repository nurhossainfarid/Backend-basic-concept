const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successfully done");
    })
});

const getData = async () => {
    const res = await promise;
    console.log(res);
};

getData();