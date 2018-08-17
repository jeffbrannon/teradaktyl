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

import { AssertError } from './assertError';
import { AssertSuccess } from './assertSuccess';

export interface IAssertable {
    AreEqual<T extends string | number | boolean>(expectedValue: T, assertedValue: T) : void,
    IsTrue<T extends string | number | boolean>(assertedValue: T) : void,
    IsFalse<T extends string | number | boolean>(assertedValue: T) : void
}

export type AssertMethod = (Assert: IAssertable)  => void

export function Test(description: string, assertMethod: AssertMethod): void {
    console.log(description);
    assertMethod(new Assert());
}

class Assert implements IAssertable {

    public AreEqual<T extends string | number | boolean>(expectedValue: T, assertedValue: T): void {
        if(expectedValue !== assertedValue) {
            throw new AssertError(`Expected value of ${expectedValue} but received value of ${assertedValue}.`);
        } else {
            AssertSuccess("ASSERT SUCCESS");
        }
    }

    public IsFalse<T extends string | number | boolean>(assertedValue: T): void {
        if(!assertedValue) {
            throw new AssertError(`Asserted value of ${assertedValue} is not false.`);
        } else {
            AssertSuccess("ASSERT SUCCESS");
        }
    }

    public IsTrue<T extends string | number | boolean>(assertedValue: T): void {
        if(assertedValue) {
            throw new AssertError(`Asserted value of ${assertedValue} is not true.`);
        } else {
            AssertSuccess("ASSERT SUCCESS");
        }
    }
}