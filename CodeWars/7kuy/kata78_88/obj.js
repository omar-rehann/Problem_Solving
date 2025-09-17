/*
Array.prototype.ofType = function(type){}


*/
Object.defineProperty(Array.prototype, "ofType", {
    value: function(type) {
        return this.filter(function(e) {
            // لو القيمة primitive (زي number, string, boolean)
            if (e === null || e === undefined) return false;
            return e.constructor === type || e instanceof type;
        });
    },
    writable: true,
    configurable: true
});