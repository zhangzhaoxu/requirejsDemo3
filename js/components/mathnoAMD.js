(function (window, a, b) {
    var c = {};
    c.add = a.add;
    c.sub = b.sub;
    window.c = c;
})(window,a,b);