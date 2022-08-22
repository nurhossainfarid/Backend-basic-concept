function errorHandler(error) {
    const { name, message, stack } = error;
    // logger.error(name, message, stack)
    console.log('Internal server error');
}

const four = () => {
    console.log('Four');
}

module.exports = {
    errorHandler,
    four,
}