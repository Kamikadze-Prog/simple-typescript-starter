interface BigObject {
    [a: string]: {
        cValue: number | string | undefined | BigObject;
    } | undefined;
}
declare function Summ(a: BigObject): number;
declare const values: {
    h: {
        cValue: number;
    };
    e: {
        cValue: number;
    };
    L: {
        cValue: number;
    };
    o: {
        cValue: string;
    };
    world: {
        cValue: {
            yay: {
                cValue: string;
            };
        };
    };
};
declare const undefinedValue: {
    o: undefined;
};
//# sourceMappingURL=index.d.ts.map