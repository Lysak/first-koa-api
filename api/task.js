exports.addTask = () => new Promise(async (resolve, reject) => {
    try {
        resolve({
            success: true
        });
    }
    catch(err) {
        reject(err);
    }
}); //{id, description}