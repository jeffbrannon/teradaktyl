"use strict";
/*
 * Copyright (c) 2018. Jeff Brannon
 * Website: https://piczelspydr.github.io/
 * Email: piczelspydr@gmail.com
 *
 * This file is part of teradaktyl
 * teradaktyl is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by  the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * teradaktyl is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with teradaktyl.  If not, see <https://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const assertError_1 = require("./assertError");
const assertSuccess_1 = require("./assertSuccess");
function Test(description, assertMethod) {
    console.log(description);
    assertMethod(new Assert());
}
exports.Test = Test;
class Assert {
    constructor() {
        this.isMock = false;
    }
    AreEqual(expectedValue, assertedValue) {
        if (expectedValue !== assertedValue) {
            throw new assertError_1.AssertError(`Expected value of ${expectedValue} but received value of ${assertedValue}.`);
        }
        else {
            assertSuccess_1.AssertSuccess(this.isMock);
        }
    }
    ErrorExpected(method) {
        let errorFound = false;
        try {
            method();
            errorFound = true;
        }
        catch (ex) {
            errorFound = false;
        }
        if (errorFound) {
            throw new assertError_1.AssertError(`Expected an Error to be thrown.`);
        }
        else {
            assertSuccess_1.AssertSuccess(this.isMock);
        }
    }
    ErrorNotExpected(method) {
        try {
            method();
            assertSuccess_1.AssertSuccess(this.isMock);
        }
        catch (ex) {
            throw new assertError_1.AssertError(`Did not expected an Error to be thrown.`);
        }
    }
    IsFalse(assertedValue) {
        if (assertedValue) {
            throw new assertError_1.AssertError(`Asserted value of ${assertedValue} is not false.`);
        }
        else {
            assertSuccess_1.AssertSuccess(this.isMock);
        }
    }
    IsTrue(assertedValue) {
        if (!assertedValue) {
            throw new assertError_1.AssertError(`Asserted value of ${assertedValue} is not true.`);
        }
        else {
            assertSuccess_1.AssertSuccess(this.isMock);
        }
    }
}
class MockAssert extends Assert {
    constructor() {
        super(...arguments);
        this.isMock = true;
    }
}
exports.MockAssert = MockAssert;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hc3NlcnQvYXNzZXJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQUVILCtDQUE0QztBQUM1QyxtREFBZ0Q7QUFVaEQsU0FBZ0IsSUFBSSxDQUFDLFdBQW1CLEVBQUUsWUFBMEI7SUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QixZQUFZLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFIRCxvQkFHQztBQUlELE1BQU0sTUFBTTtJQUFaO1FBRWMsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWtEN0IsQ0FBQztJQWhEVSxRQUFRLENBQXNDLGFBQWdCLEVBQUUsYUFBZ0I7UUFDbkYsSUFBRyxhQUFhLEtBQUssYUFBYSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFCQUFxQixhQUFhLDBCQUEwQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZHO2FBQU07WUFDSCw2QkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFTSxhQUFhLENBQUMsTUFBVztRQUM1QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxDQUFDO1lBQ1QsVUFBVSxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUFDLE9BQU0sRUFBRSxFQUFFO1lBQ1IsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUVELElBQUcsVUFBVSxFQUFFO1lBQ1gsTUFBTSxJQUFJLHlCQUFXLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0gsNkJBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsTUFBVztRQUMvQixJQUFJO1lBQ0EsTUFBTSxFQUFFLENBQUM7WUFDVCw2QkFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QjtRQUFDLE9BQU0sRUFBRSxFQUFFO1lBQ1IsTUFBTSxJQUFJLHlCQUFXLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUNwRTtJQUNMLENBQUM7SUFFTSxPQUFPLENBQXNDLGFBQWdCO1FBQ2hFLElBQUcsYUFBYSxFQUFFO1lBQ2QsTUFBTSxJQUFJLHlCQUFXLENBQUMscUJBQXFCLGFBQWEsZ0JBQWdCLENBQUMsQ0FBQztTQUM3RTthQUFNO1lBQ0gsNkJBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFzQyxhQUFnQjtRQUMvRCxJQUFHLENBQUMsYUFBYSxFQUFFO1lBQ2YsTUFBTSxJQUFJLHlCQUFXLENBQUMscUJBQXFCLGFBQWEsZUFBZSxDQUFDLENBQUM7U0FDNUU7YUFBTTtZQUNILDZCQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztDQUNKO0FBRUQsTUFBYSxVQUFXLFNBQVEsTUFBTTtJQUF0Qzs7UUFDYyxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7Q0FBQTtBQUZELGdDQUVDIn0=