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
const path = require('path');
const fs = require('fs');
const testPath_1 = require("./testPath");
function testFiles() {
    return GetTestFilesFromPath(testPath_1.rootTestPath);
}
exports.testFiles = testFiles;
function GetTestFilesFromPath(dir, fileList) {
    let fileListLocal = fileList || [];
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).forEach((file) => {
            const fullFilePath = path.join(dir, file);
            if (fs.statSync(fullFilePath).isDirectory()) {
                fileListLocal = GetTestFilesFromPath(fullFilePath, fileListLocal);
            }
            else {
                fileListLocal.push(fullFilePath);
            }
        });
    }
    return fileListLocal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RGaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHOztBQUVILE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIseUNBQXdDO0FBRXhDLFNBQWdCLFNBQVM7SUFDckIsT0FBTyxvQkFBb0IsQ0FBQyx1QkFBWSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUZELDhCQUVDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsUUFBbUI7SUFDMUQsSUFBSSxhQUFhLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNuQyxJQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDbkIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRTtZQUN2RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3pDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDckU7aUJBQ0k7Z0JBQ0QsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFDO0tBQ047SUFDRCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDIn0=