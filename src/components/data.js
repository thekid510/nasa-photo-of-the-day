import React from 'react';

const DataContainer = (props) => {
    const { nasaData } = props;
    
  return ( 
      <div> 
          {nasaData && <img src ={nasaData.url} />}
            {console.log(nasaData)};

      </div>
  )  
} 
export default DataContainer;