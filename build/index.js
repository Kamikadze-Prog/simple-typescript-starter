"use strict";
console.log('Hello World');
function Summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cValue) === 'undefined')
            return 2021;
        if (typeof elem.cValue === 'string')
            return +elem.cValue;
        if (typeof elem.cValue === 'object')
            return Summ(elem.cValue);
        return elem.cValue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
const values = {
    h: { cValue: 2 },
    e: { cValue: 3 },
    L: { cValue: 5 },
    o: { cValue: '0' },
    world: { cValue: { yay: { cValue: '100' } } },
};
const undefinedValue = {
    o: undefined
};
console.log(Summ(values));
console.log(`Happy ${Summ(undefinedValue)} Year`);
//# sourceMappingURL=index.js.map