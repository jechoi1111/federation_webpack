import React from 'react';

import {Button} from 'webpack_remote/Button'
import {useExampleStore} from 'webpack_remote/Store'

const TestPage = () => {
    const {bears, addBear} = useExampleStore();
    return (
        <div>
            <div>
                REMOTE_HOST Bears: {bears}
                <Button onClick={addBear} />
            </div>
        </div>
    );
};

export {TestPage};
