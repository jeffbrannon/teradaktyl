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

import { MockAssert } from '../src/assert/assertable';
import { Teradaktyl } from '../src/teradaktyl';

const mockAssertMethod = new MockAssert();

Teradaktyl.Test("Assert AreEqual when values are equal", (assert: Teradaktyl.IAssertable) => {
    assert.ErrorNotExpected(() => {
        mockAssertMethod.AreEqual(1, 1);
    });
});

Teradaktyl.Test("Assert AreEqual when values not equal", (assert: Teradaktyl.IAssertable) => {
    assert.ErrorExpected(() => {
        mockAssertMethod.AreEqual(1, 2);
    });
});