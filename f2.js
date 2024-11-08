function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed ");
        callback();
    }, 1000);
}

function saveData(callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback();
    }, 1000);
}

// Named functions to rescue from callback hell
function handleData() {
    processData(handleSave);
}

function handleSave() {
    saveData(() => {
        console.log("All operations complete");
    });
}

// Start the process
fetchData(handleData);
