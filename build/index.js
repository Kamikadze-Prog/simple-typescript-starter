"use strict";
console.log('Hello World');
function Summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'undefined')
            return 2021;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'string')
            return +elem.cvalue;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'number')
            return elem.cvalue;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'object')
            return Summ(elem.cvalue);
        return elem === null || elem === void 0 ? void 0 : elem.cvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
const values = {
    h: { cvalue: 2 },
    e: { cvalue: 3 },
    L: { cvalue: 5 },
    o: { cvalue: '0' },
    world: { cvalue: { yay: { cvalue: '100' } } },
};
const undefindValue = {
    o: { cvalue: undefined },
};
console.log(Summ(values));
console.log(`Heppy ${Summ(undefindValue)} Year`);
//# sourceMappingURL=index.js.map