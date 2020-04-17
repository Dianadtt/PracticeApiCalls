function fetchObject(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(function(response) {
        return response.json();
    });
}

function fetchDogImage() {
    return fetchObject("https://random.dog/woof.json")
        .then(function(imageObj) {
            return Promise.resolve(imageObj.url);
        });
}

function fetchCatImage() {
    return fetchObject("https://aws.random.cat/meow")
        .then(function(imageObj) {
            return Promise.resolve(imageObj.file);
        });;
}

function fetchFoxImage() {
    return fetchObject("https://randomfox.ca/floof/")
        .then(function(imageObj) {
            return Promise.resolve(imageObj.image);
        });;
}

function fetchChuckNorrisJokes() {
    var chuckNorrisUrl = "http://api.icndb.com";
    return fetchObject(chuckNorrisUrl + "/jokes/");
}

function fetchRandomJoke(jokeType) {
    var randomJokeApi = "https://official-joke-api.appspot.com";
    return fetchObject(`${randomJokeApi}/jokes/${jokeType}/random`);
}