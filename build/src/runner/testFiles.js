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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3J1bm5lci90ZXN0RmlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7QUFFSCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLHlDQUF3QztBQUV4QyxTQUFnQixTQUFTO0lBQ3JCLE9BQU8sb0JBQW9CLENBQUMsdUJBQVksQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQVMsb0JBQW9CLENBQUMsR0FBVyxFQUFFLFFBQW1CO0lBQzFELElBQUksYUFBYSxHQUFHLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDbkMsSUFBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBWSxFQUFFLEVBQUU7WUFDdkQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN6QyxhQUFhLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ3JFO2lCQUNJO2dCQUNELGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNOO0lBQ0QsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQyJ9