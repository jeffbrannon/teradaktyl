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
testFiles_1.testFiles().forEach((filename) => {
    console.info(`Testing File: ${filename}`);
    require(filename);
    console.info(`Success Testing File: ${filename}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVyYWRha3R5bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXJhZGFrdHlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7O0FBRUgsMkNBQXNDO0FBRXRDLHFCQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFlLEVBQUUsRUFBRTtJQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDIn0=