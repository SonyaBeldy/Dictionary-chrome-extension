let save_btn = document.getElementById("save-btn");

save_btn.addEventListener("click", (ev) => {

    let eng_input = document.getElementById("eng-input").value;
    let ru_input = document.getElementById("ru-input").value;

    var translation = {
        originText: eng_input,
        translatedText: ru_input
    }
    
    document.getElementById("load-div").style.display = "flex";

    fetch("http://localhost:8080/translations/add", {
        method: "POST",
        headers: {
            'content-type': 'application/json'    
        },
        body: JSON.stringify(translation)
    }).then((value) => checkSuccess(value.status))

})

function checkSuccess(status) {
    
    console.log(status);
    if(status == 200) {
        setTimeout(() => {

            document.getElementById("load-div").style.display = "none";
        }, 1200)
        document.getElementById("eng-input").value = "";
        document.getElementById("ru-input").value = "";
    }
}