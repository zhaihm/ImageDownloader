ArrayHelper = {
    removeEmptyString: function(arr, trim) {
        var ret = [];
        arr.forEach(function(e) {
            if (trim === true) {
                e = $.trim(e);
            }
            if (e != "") {
                ret.push(e);
            }
        });
        return ret;
    }
};
