//Loader
console.log("........Loading.........")

async function load(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const testjson = await load('./test.json');
console.log(testjson)