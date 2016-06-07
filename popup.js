
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'GET_IMG_URL_LIST'}, function(imgUrlList) {
            console.log(imgUrlList);
        });
    });
});
