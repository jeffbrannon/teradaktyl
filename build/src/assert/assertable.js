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
const Assert = {
    AreEqual
};
function AreEqual(expectedValue, assertedValue) {
    if (expectedValue !== assertedValue) {
        const error = new Error(`Expected value of ${expectedValue} but received value of ${assertedValue}.`);
        error.name = "ASSERT ERROR";
        error.stack = "";
        throw error;
    }
    else {
        console.info("ASSERT SUCCESS");
    }
}
function TestMethod(description, assertMethod) {
    console.log(description);
    assertMethod(Assert);
}
exports.TestMethod = TestMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hc3NlcnQvYXNzZXJ0YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQU1ILE1BQU0sTUFBTSxHQUFnQjtJQUN4QixRQUFRO0NBQ1gsQ0FBQztBQUVGLFNBQVMsUUFBUSxDQUFJLGFBQWdCLEVBQUUsYUFBZ0I7SUFDbkQsSUFBRyxhQUFhLEtBQUssYUFBYSxFQUFFO1FBQ2hDLE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLHFCQUFxQixhQUFhLDBCQUEwQixhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLEtBQUssQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sS0FBSyxDQUFDO0tBQ2Y7U0FBTTtRQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNsQztBQUNMLENBQUM7QUFNRCxTQUFnQixVQUFVLENBQUMsV0FBbUIsRUFBRSxZQUEwQjtJQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBSEQsZ0NBR0MifQ==