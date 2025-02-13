import React from 'react';
import {Button} from 'webpack_remote/Button'
import {Add} from 'webpack_remote/commonUtil'
import {Checkbox} from 'webpack_remote/Checkbox'
import {TestPage} from 'remote_host/TestPage'
import {Radio} from 'webpack_remote/Radio'
import {useExampleStore} from 'webpack_remote/Store'
import {useRemoteHostStore} from 'remote_host/Store'
import {useSyncExternalStore} from 'react';

export const App = () => {
    const {bears, addBear} =  useExampleStore();
    return (<>
            <div>HOST
                {/*<div>{Add({a: 3, b:3})}</div>*/}
                {/*<Checkbox />*/}
                <div>
                    HOST Bears: {bears} {' '}
                    <Button onClick={addBear}/>
                </div>
                {/*<Radio />*/}
            </div>
            <TestPage />
    </>)
}