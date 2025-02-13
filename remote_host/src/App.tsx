import React from 'react';
import {Button} from 'webpack_remote/Button'
import {TestPage} from "./pages/TestPage";
import {useExampleStore} from 'webpack_remote/Store'

export const App = () => {
    const {bears, addBear} =  useExampleStore();
    return <div>REMOTE & HOST <Button onClick={addBear} /><TestPage/></div>
}