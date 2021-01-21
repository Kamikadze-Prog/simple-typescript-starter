console.log('Hello World');

interface BigObject {
  [a: string]: { cvalue: number | string | undefined | BigObject } | undefined;
}

function Summ(a: BigObject) {
  const x: (number | undefined)[] = Object.keys(a).map((k) => {
    //console.log(a[k]);
    const elem = a[k];
    if (typeof elem?.cvalue === 'undefined') return 2021;
    if (typeof elem?.cvalue === 'string') return +elem.cvalue;
    if (typeof elem?.cvalue === 'object') return Summ(elem.cvalue);
    return elem?.cvalue;
  });

  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
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
