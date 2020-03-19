var currentURLsTextArea = document.getElementById("currentURLsTextArea");
var newURLsTextArea = document.getElementById("newURLsTextArea");
var openURLsButton = document.getElementById("openURLsButton");

chrome.tabs.query({ currentWindow: true }, function (tabs) {
    var urls = ""
    tabs.forEach(tab => {
        urls += tab.url + "\n";
    });
    urls = urls.trim();
    currentURLsTextArea.value = urls;
});

openURLsButton.onclick = function() {
    var urls = newURLsTextArea.value;
    urls = urls.split("\n");
    urls.forEach(url => {
        chrome.tabs.create({ url });
    })
}