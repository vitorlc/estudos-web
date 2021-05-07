"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator
/// Factory 
function Logger(prefix) {
    return (target) => {
        console.log(prefix + '-' + target);
    };
}
let Foo = class Foo {
};
Foo = __decorate([
    Logger('awesome')
], Foo);
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.version = apiVersion;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setAPIVersion("1.0.0")
], API);
console.log(new API());
// Property decorator
function minLength(length) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
        const setter = (value) => {
            if (value.length < length)
                return console.error("ERRO");
            else
                val = value;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}
class Movie {
    constructor(title) {
        this.title = title;
    }
}
__decorate([
    minLength(5)
], Movie.prototype, "title", void 0);
const movie = new Movie("Interstellar");
const movie2 = new Movie("ITI");
// Method decorator
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Esperando ${ms}`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Greeter {
    constructor(greeting) {
        this.greeting = greeting;
    }
    greet() {
        console.log(this.greeting);
    }
}
__decorate([
    delay(2000)
], Greeter.prototype, "greet", null);
const newGreeter = new Greeter("EAWW");
newGreeter.greet();
