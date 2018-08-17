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
const testFiles_1 = require("./testFiles");
function testRunner() {
    testFiles_1.testFiles().forEach((filename) => {
        require(filename);
    });
}
exports.testRunner = testRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydW5uZXIvdGVzdFJ1bm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQUVILDJDQUFzQztBQUV0QyxTQUFnQixVQUFVO0lBQ3RCLHFCQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFlLEVBQUUsRUFBRTtRQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSkQsZ0NBSUMifQ==