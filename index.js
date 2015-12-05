module.exports = function(gfn) {
    var it = gfn();

    (function iterator(val) {
        var res = it.next(val);
        if (!res.done) {
            if (res.value.then) {
                res.value.then(function(value) {
                    iterator(value);
                });
            } else {
                setTimeout(function() {
                    iterator(res.value);
                }, 0);
            }
        }
    })();
}
