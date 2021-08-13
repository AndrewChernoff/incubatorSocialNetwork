import React from 'react';
import loadingGif from '../../assets/images/loading2.gif';

const Prelouder = (props) => {
    return (
        <div>
            <img src={loadingGif} style={{ width: 100 }} />
        </div>
    )
}

export default Prelouder