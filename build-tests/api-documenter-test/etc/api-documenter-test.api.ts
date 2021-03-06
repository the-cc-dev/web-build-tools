// @public
declare const constVariable: number;

// @public
declare class DocBaseClass {
}

// @public
declare class DocClass1 extends DocBaseClass implements IDocInterface1, IDocInterface2 {
    constructor(name: string);
    // @deprecated (undocumented)
    deprecatedExample(): void;
    exampleFunction(a: string, b: string): string;
    exampleFunction(x: number): number;
    interestingEdgeCases(): void;
    // @eventproperty
    malformedEvent: SystemEvent;
    // @eventproperty
    readonly modifiedEvent: SystemEvent;
    regularProperty: SystemEvent;
    static sumWithExample(x: number, y: number): number;
    tableExample(): void;
}

// @public
declare enum DocEnum {
    One = 1,
    Two = 2,
    Zero = 0
}

// @public
declare type ExampleTypeAlias = Promise<boolean>;

// @public
declare function globalFunction(x: number): number;

// @public (undocumented)
interface IDocInterface1 {
    regularProperty: SystemEvent;
}

// @public (undocumented)
interface IDocInterface2 extends IDocInterface1 {
    // @deprecated (undocumented)
    deprecatedExample(): void;
}

// @public
interface IDocInterface3 {
    (x: number): number;
    [x: string]: string;
    new (): IDocInterface1;
}

// @public
declare namespace OuterNamespace {
    namespace InnerNamespace {
        function nestedFunction(x: number): number;
    }
    let nestedVariable: boolean;
}

// @public
declare class SystemEvent {
    addHandler(handler: () => void): void;
}

