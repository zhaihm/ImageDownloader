
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadAll').addEventListener('click', function() {
        downloadAll();
    });

    $(":checkbox").change(function() {
        console.log('checkbox changed');
    });

    chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'GET_IMG_URL_LIST'}, function(imgUrlList) {
            imgUrlList = $.unique(imgUrlList);
            imgUrlList = ArrayHelper.removeEmptyString(imgUrlList);
            console.log(imgUrlList);
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
    var folder = $.trim(document.getElementById('path').value);
    for (var i = 0; i < imgList.length; i++) {
        chrome.downloads.download({
            url: imgList[i].src//,
            //filename: (value == "") ?
        });
    }
}

function getDownloadTypes() {
    var checkboxList = document.getElementsByTagName('checkbox');
    var types = [];
    for (var i = 0; i < checkboxList.length; ++i) {
        if (checkboxList[i].checked) {
            types.push(checkboxList[i].title);
        }
    }
    return types;
}
