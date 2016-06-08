
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadAll').addEventListener('click', function() {
        downloadAll();
    });
    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'GET_IMG_URL_LIST'}, function(imgUrlList) {
            console.log(imgUrlList);
            imgUrlList = $.unique(imgUrlList);
            initImgTable(imgUrlList);
        });
    });
});

function initImgTable(imgUrlList) {
    var imgTable = document.createElement('table');
    for (var i = 0; i < imgUrlList.length; ++i) {
        imgTable.innerHTML += '<tr><td>' + (i+1) + '</td><td><img src="' + imgUrlList[i] + '"/></td></tr>';
    }
    document.body.appendChild(imgTable);
}

function downloadAll() {
    var imgList = document.getElementsByTagName('img');
    for (var i = 0; i < imgList.length; i++) {
        chrome.downloads.download({
            url: imgList[i].src
        });
    }
}
