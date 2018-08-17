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
    AreEqual(expectedValue, assertedValue) {
        if (expectedValue !== assertedValue) {
            throw new assertError_1.AssertError(`Expected value of ${expectedValue} but received value of ${assertedValue}.`);
        }
        else {
            assertSuccess_1.AssertSuccess("ASSERT SUCCESS");
        }
    }
    IsFalse(assertedValue) {
        if (!assertedValue) {
            throw new assertError_1.AssertError(`Asserted value of ${assertedValue} is not false.`);
        }
        else {
            assertSuccess_1.AssertSuccess("ASSERT SUCCESS");
        }
    }
    IsTrue(assertedValue) {
        if (assertedValue) {
            throw new assertError_1.AssertError(`Asserted value of ${assertedValue} is not true.`);
        }
        else {
            assertSuccess_1.AssertSuccess("ASSERT SUCCESS");
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hc3NlcnQvYXNzZXJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQUVILCtDQUE0QztBQUM1QyxtREFBZ0Q7QUFVaEQsU0FBZ0IsSUFBSSxDQUFDLFdBQW1CLEVBQUUsWUFBMEI7SUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QixZQUFZLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFIRCxvQkFHQztBQUVELE1BQU0sTUFBTTtJQUVELFFBQVEsQ0FBc0MsYUFBZ0IsRUFBRSxhQUFnQjtRQUNuRixJQUFHLGFBQWEsS0FBSyxhQUFhLEVBQUU7WUFDaEMsTUFBTSxJQUFJLHlCQUFXLENBQUMscUJBQXFCLGFBQWEsMEJBQTBCLGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDdkc7YUFBTTtZQUNILDZCQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7SUFFTSxPQUFPLENBQXNDLGFBQWdCO1FBQ2hFLElBQUcsQ0FBQyxhQUFhLEVBQUU7WUFDZixNQUFNLElBQUkseUJBQVcsQ0FBQyxxQkFBcUIsYUFBYSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzdFO2FBQU07WUFDSCw2QkFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFzQyxhQUFnQjtRQUMvRCxJQUFHLGFBQWEsRUFBRTtZQUNkLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFCQUFxQixhQUFhLGVBQWUsQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCw2QkFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0NBQ0oifQ==