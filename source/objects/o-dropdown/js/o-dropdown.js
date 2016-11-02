var oDropdown = (function () {
    'use strict';


    var _private = {
        holder          : document.getElementsByClassName('o-dropdown'),
        dropdownButton  : document.getElementsByClassName('o-dropdown-toggle'),
        dropdownMenu    : document.getElementsByClassName('o-dropdown__menu'),
    },

    swallow = function () {
        console.log("swallow");
    },

    eat = function () {



    };

    return {

        _private: _private,

        eat: eat,

        swallow: swallow

    };

}());
// console.log(oDropdown)

// oDropdown.eat();
//
// oDropdown.chew();
//
// oDropdown.swallow();
