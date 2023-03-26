cordova.define("com-yzq-customer-plugin.CustomerPlugin", function (require, exports, module) {
    var exec = require('cordova/exec');

    /**
     * 导出一个方法给前端调用 coolMethord就是方法名
     * @param arg0 传递的参数
     * @param success 成功的回调
     * @param error 失败的回调
     */
    exports.coolMethod = function (arg0, success, error) {
        console.log('调用原生的execture方法')
        /**
         * CustomerPlugin 就是指定要调用原生的类名
         * coolMethod 是action，在原生代码中会根据该值进行判断执行不同的逻辑
         */
        exec(success, error, 'CustomerPlugin', 'coolMethod', [arg0]);
    };

});

