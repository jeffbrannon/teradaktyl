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

const path = require('path');
const fs = require('fs');

import {rootTestPath} from './testPath';

export function testFiles():string[] {
    return GetTestFilesFromPath(rootTestPath);
}

function GetTestFilesFromPath(dir: string, fileList?: string[]): string[] {
    let fileListLocal = fileList || [];
    if(fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).forEach((file: string) => {
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
