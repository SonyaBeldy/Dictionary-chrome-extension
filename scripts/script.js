let save_btn = document.getElementById("save-btn");

save_btn.addEventListener("click", (ev) => {

    let eng_input = document.getElementById("eng-input").value;
    let ru_input = document.getElementById("ru-input").value;

    var translation = {
        originText: eng_input,
        translatedText: ru_input
    }

    fetch("http://localhost:8080/translations/add", {
        method: "POST",
        headers: {
            'content-type': 'aplication/json'    
        },
        body: JSON.stringify(translation)
    }).then((value) => console.log(value))
})