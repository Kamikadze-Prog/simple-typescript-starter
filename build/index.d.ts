interface BigObject {
    [a: string]: {
        cvalue: number | string | undefined | BigObject;
    } | undefined;
}
declare function Summ(a: BigObject): number;
declare const values: {
    h: {
        cvalue: number;
    };
    e: {
        cvalue: number;
    };
    L: {
        cvalue: number;
    };
    o: {
        cvalue: string;
    };
    world: {
        cvalue: {
            yay: {
                cvalue: string;
            };
        };
    };
};
declare const undefindValue: {
    o: {
        cvalue: undefined;
    };
};
//# sourceMappingURL=index.d.ts.map