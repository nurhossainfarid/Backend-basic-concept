const { errorHandler, four } = require('./ErrorsHandaling.js')

four();

const getData = () => {
    try {
        undefined.find();
    } catch (error) {
        errorHandler(error);
    }
}


getData();

console.log(
    'data'
);