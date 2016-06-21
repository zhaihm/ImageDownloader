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
    },

    inArray: function(value, arr) {
        return arr.indexOf(value) != -1;
    }
};

StringHelper = {
    startWith: function(str, prefix) {
        return (str.substr(0, prefix.length) == str);
    }
};
