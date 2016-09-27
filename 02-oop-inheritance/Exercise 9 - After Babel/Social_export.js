"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Social = {
    share: function share(name) {
        console.log("Share " + this.title + " with " + name);
    },

    like: function like(name) {
        console.log(name + " likes " + this.title);
    }
};

exports.default = Social;
