import {memo} from 'react';

const Title = () => {
    console.log('Title');
    return (
        <div>
            UseCallBackHook
        </div>
    );
};

export default memo (Title);