"use strict";
exports.__esModule = true;
var Bady = /** @class */ (function () {
    function Bady(name) {
        this._name = name;
        console.log("bady start");
    }
    Bady.smile = function () {
        console.log('haha');
    };
    Bady.prototype.getBadyName = function () { return this._name; };
    return Bady;
}());
exports.Bady = Bady;
exports.bady = new Bady('Nico');
