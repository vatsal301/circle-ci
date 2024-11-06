function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000);
}

function saveData(callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback();
    }, 1000);
}

// Nested callbacks create callback hell
fetchData(() => {
    processData(() => {
        saveData(() => {
            console.log("All operations complete");
        });
    });
});
