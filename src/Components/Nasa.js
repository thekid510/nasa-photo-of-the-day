import React from 'react';

const Data = (props) => {
const { nasaData } = props;

return (
    <div>
        { nasaData && <img src ={nasaData.url} alt="nasa"/>}
            {console.log(nasaData)}
    </div>
)
}
export default Data;