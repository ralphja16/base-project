'use strict';

export let timer = function () {

    let triggerClickListener = (i, j) => {
        return i * j;
    };

    let testArray = [1,2,4,6,78,42,5];

    return {

        testArray: testArray,
        triggerClickListener: triggerClickListener

    };

};
