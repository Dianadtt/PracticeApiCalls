// 1.Implement the functionality to retrieve a:
// random dog photo: https://random.dog/woof.json
// random cat photo: https://aws.random.cat/meow
// random fox photo: https://randomfox.ca/floof/
// add a dropdown on the page where you can select which animal you want to see (options: dog, cat, fox)
// add a "get photo" button
// when clicking on the button, call the appropriate API (from the list above) to get the image of the selected animal

//{"file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/rscn9933.jpg"}
//{"fileSizeBytes":38031,"url":"https://random.dog/ffa35fd1-fbfd-41a6-a7cd-99f9b8057ceb.jpg"}
//{"image":"http:\/\/randomfox.ca\/images\/51.jpg","link":"http:\/\/randomfox.ca\/?i=51"}

const btn = document.getElementById("button");

var onButtonClick = function() {
    const imageType = document.getElementById("imageType").value;
    if (imageType === "dog") {
        fetchDogImage().then(function(imageUrl) {
            const image = document.getElementById("image");
            image.setAttribute("src", imageUrl);
        });
    } else if (imageType === "cat") {
        fetchCatImage().then(function(imageUrl) {
            const image = document.getElementById("image");
            image.setAttribute("src", imageUrl);
        });
    } else {
        fetchFoxImage().then(function(imageUrl) {
            const image = document.getElementById("image");
            image.setAttribute("src", imageUrl);
        });
    }
}
btn.addEventListener("click", onButtonClick)
    //3. Display Chuck Norris jokes on the page: http://www.icndb.com/api/ 


fetchChuckNorrisJokes().then(function(jokeObject) {
    const container3 = document.querySelector(".container3");
    for (let i = 0; i < jokeObject.value.length; i++) {
        const p = document.createElement("p");
        p.innerHTML = jokeObject.value[i].joke
        container3.appendChild(p)
    }
})

//4.Display random or programming jokes on the page: https://github.com/15Dkatz/official_joke_api
const jokeButton = document.getElementById("jokeBtn");
jokeButton.addEventListener("click", function() {
    const jokeType = document.getElementById("jokeType").value;
    fetchRandomJoke(jokeType).then(function(randomJokes) {
        const randomJoke = randomJokes[0];
        const container4 = document.querySelector(".container4");
        const question = document.createElement("p");
        question.innerHTML = randomJoke.setup;
        const answer = document.createElement("p");
        answer.innerHTML = randomJoke.punchline;
        console.log(randomJoke)
        container4.appendChild(question)
        container4.appendChild(answer)
    });
});