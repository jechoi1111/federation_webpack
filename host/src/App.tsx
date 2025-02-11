import React from 'react';
import {Button} from 'webpack_remote/Button'
import {Add} from 'webpack_remote/commonUtil'
import {Checkbox} from 'webpack_remote/Checkbox'
import {TestPage} from 'remote_host/TestPage'
import {Radio} from 'webpack_remote/Radio'

export const App = () => {
    return (<>
            <div>HOST
                <div>{Add({a: 3, b:3})}</div>
                <Checkbox />
                <Button/>
                <Radio />
            </div>
            <TestPage />
    </>)
}