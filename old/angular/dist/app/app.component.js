"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.greeting = 'World';
        this.counter = 0;
        this.doubleCounter = 0;
        this.tripleCounter = 0;
        this.unrelated = 0;
    }
    AppComponent.prototype.increment = function (event) {
        console.log('incrementing');
        this.counter += 1;
        this.doubleCounter = this.counter * 2;
        this.tripleCounter = this.doubleCounter * 3;
    };
    AppComponent.prototype.incrementUnrelated = function () {
        console.log('incrementing unrelated');
        this.unrelated += 100;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            template: "\n\t<p>Hello, {{greeting}}</p>\n\t(counter: {{counter}})\n\t(doubleCounter: {{doubleCounter}})\n\t(tripleCounter: {{tripleCounter}})\n\t(unrelated: {{unrelated}})\n\t<button (click)=\"increment($event)\">increment</button>\n\t<button (click)=\"incrementUnrelated()\">increment unrelated</button>\n\t"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
