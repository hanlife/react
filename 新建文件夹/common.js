var myApp = (function () {
    var h_App = {
        defalut: {},
        init: () => {},
        ajax: () => {},
        tip: () => {},
    }
    return h_App
})()

var Fn = function util(){
    this.defalut = {
        id:1
    }
    this.commonFn = function(){
        console.log("commonJs")
    }
}

Fn.prototype.init = function(){
    console.log(this)
}