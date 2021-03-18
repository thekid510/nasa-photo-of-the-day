import React from 'react';
import styled from "styled-components"

const DataContainer = (props) => {
    const { nasaData } = props;
    
  return ( 
      <div> 
          {nasaData && <img src ={nasaData.url} />}
            {console.log(nasaData)}

      </div>
  )  
} 
export default DataContainer;