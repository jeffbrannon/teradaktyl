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
const assertable_1 = require("../src/assert/assertable");
const teradaktyl_1 = require("../src/teradaktyl");
const mockAssertMethod = new assertable_1.MockAssert();
teradaktyl_1.Teradaktyl.Test("Assert AreEqual when values are equal", (assert) => {
    assert.ErrorNotExpected(() => {
        mockAssertMethod.AreEqual(1, 1);
    });
});
teradaktyl_1.Teradaktyl.Test("Assert AreEqual when values not equal", (assert) => {
    assert.ErrorExpected(() => {
        mockAssertMethod.AreEqual(1, 2);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVyYWRha3R5bC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvdGVyYWRha3R5bC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7O0FBRUgseURBQXNEO0FBQ3RELGtEQUErQztBQUUvQyxNQUFNLGdCQUFnQixHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBRTFDLHVCQUFVLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQUMsTUFBOEIsRUFBRSxFQUFFO0lBQ3hGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7UUFDekIsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsdUJBQVUsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBQyxNQUE4QixFQUFFLEVBQUU7SUFDeEYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7UUFDdEIsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=