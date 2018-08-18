export interface IAssertable {
    AreEqual<T extends string | number | boolean>(expectedValue: T, assertedValue: T): void;
    ErrorExpected(method: any): void;
    ErrorNotExpected(method: any): void;
    IsTrue<T extends string | number | boolean>(assertedValue: T): void;
    IsFalse<T extends string | number | boolean>(assertedValue: T): void;
}
export declare function Test(description: string, assertMethod: AssertMethod): void;
declare type AssertMethod = (Assert: IAssertable) => void;
declare class Assert implements IAssertable {
    protected isMock: boolean;
    AreEqual<T extends string | number | boolean>(expectedValue: T, assertedValue: T): void;
    ErrorExpected(method: any): void;
    ErrorNotExpected(method: any): void;
    IsFalse<T extends string | number | boolean>(assertedValue: T): void;
    IsTrue<T extends string | number | boolean>(assertedValue: T): void;
}
export declare class MockAssert extends Assert {
    protected isMock: boolean;
}
export {};
