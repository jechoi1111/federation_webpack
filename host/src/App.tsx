import React from 'react';
import {Button} from 'webpack_remote/Button'
import {Add} from 'webpack_remote/commonUtil'
import {Checkbox} from 'webpack_remote/Checkbox'
import {TestPage} from 'remote_host/TestPage'

export const App = () => {
    return (<>
            <div>HELLO, World!!
                <span>{Add(1, 3)}</span>
                <Checkbox />
                <Button/>
            </div>
            <TestPage />
    </>)
}