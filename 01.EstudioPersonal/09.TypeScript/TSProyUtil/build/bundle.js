System.register("Util", [], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function suma(num1) {
        return num1 + num1;
    }
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.1416);
        }
    };
});
System.register("app", ["Util"], function (exports_2, context_2) {
    "use strict";
    var Util_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Util_1_1) {
                Util_1 = Util_1_1;
            }
        ],
        execute: function () {
            console.log(Util_1.PI);
        }
    };
});
