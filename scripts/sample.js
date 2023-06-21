async function alertAfterClick(info, tab) {
    console.log("click");
    // alert("click");



    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: `Selected text`,
        message: info.selectionText,
        priority: 1
        });

    
    var translation = {
        originText: info.selectionText
    }

    var response = await fetch("http://localhost:8080/translations/add", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(translation)
    } )

    var result = await response.json();
    
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: `Status`,
        message: result,
        priority: 1
        });
}



chrome.contextMenus.onClicked.addListener(
    alertAfterClick
);
chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create(
        {
        title: "Alert selected text",
        id: "alert",
        contexts: ["selection"],
        }
    )
    });

// const mediumHighlighter = document.createElement("medium-highlighter");
// document.body.appendChild(mediumHighlighter);

// const setMarkerPosition = (markerPosition) =>
//   mediumHighlighter.setAttribute(
//     "markerPosition",
//     JSON.stringify(markerPosition)
//   );

// setMarkerPosition({
//   left: 0,
//   top: 0,
//   display: "flex",
// });

