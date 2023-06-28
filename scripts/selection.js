var square = document.createElement("div");
// square.style = "z-index: 999; position: absolute; background: red; width: 100px; height: 100px; display: block; top: 0; left: 0";

square.innerHTML = `<form>
    <input type="text" value="Write translation..." name="translate" id="translation">
    <input type="submit" value="Save">
</form>`

square.addEventListener("mousedown", (ev) => {
    ev.stopPropagation();
    console.log("hello click");
    console.log(ev);
}, {capture: false});


// square.addEventListener("mouseup", (ev) => {
//     console.log("hello click");
//     console.log(ev);
//     ev.stopPropagation();
// }, false);

// square.addEventListener("click", (ev) => {
//     console.log("hello click");
//     console.log(ev);
//     ev.stopPropagation();
// }, false);

document.body.appendChild(square);

// var input = document.createElement("input");
// square.appendChild(input);


document.addEventListener("selectionchange", () => {
    var text = window.getSelection().toString();
    if(text == "") {
        square.style = styled("none", 0, 0);
    } else {
        let s = window.getSelection();
        let oRange = s.getRangeAt(0);
        let oRect = oRange.getBoundingClientRect();
        window.getSelection.style = "user-select: "
        
        console.log(`${oRect.left}, ${oRect.top}`);
        square.style = styled("block", oRect.left + oRect.width/2,  oRect.top + oRect.height * 1.2);
    }    
});

const styled = (display, left, top) => 
    `z-index: 999; 
    position: fixed; 
    background: white; 
    border: 1.6px solid #0000002b; 
    border-radius: 8px;
    padding: 10px;
    filter: drop-shadow(0 0 0.2rem #0000002b);
    display: ${display}; 
    top: ${top}px; 
    left: ${left}px`; //вернет эту строку
    




