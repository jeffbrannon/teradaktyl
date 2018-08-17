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

export interface IAssertable {
    AreEqual<T extends string | number | boolean>(expectedValue: T, assertedValue: T) : void
}

const Assert: IAssertable = {
    AreEqual
};

function AreEqual<T>(expectedValue: T, assertedValue: T): void {
    if(expectedValue !== assertedValue) {
        const error = new Error(`Expected value of ${expectedValue} but received value of ${assertedValue}.`);
        error.name = "ASSERT ERROR";
        error.stack = "";
        throw error;
    } else {
        console.info("ASSERT SUCCESS");
    }
}

export interface AssertMethod {
    (Assert: IAssertable) : void
}

export function TestMethod(description: string, assertMethod: AssertMethod): void {
    console.log(description);
    assertMethod(Assert);
}