chrome.tabs.query({ currentWindow: true }, function (tabs) {
    urls = ""
    tabs.forEach(tab => {
        urls += tab.url + "\n";
    });
    urls = urls.trim();
    var urlsTextArea = document.getElementById("urlsTextArea");
    urlsTextArea.value = urls;
    urlsTextArea.cols = 100;
    urlsTextArea.rows = tabs.length < 50 ? tabs.length : 50;
});