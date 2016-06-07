// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'GET_IMG_URL_LIST') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        var imgList = document.getElementsByTagName('img');
        var imgUrlList = [];
        for (var i = 0; i < imgList.length; i++) {
            var url = imgList[0].src;
            imgUrlList.push(url);
        }
        console.log(imgUrlList)
        sendResponse(imgUrlList);
    }
});
