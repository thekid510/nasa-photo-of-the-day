import React from 'react';
import styled from "styled-components"
const StyledTitle = styled.div`
color:red;
` 
const DataContainer = (props) => {
    const { nasaData } = props;
    
  return ( 
      <div> 
          {nasaData && <img src ={nasaData.url} />}
            {console.log(nasaData)}
             {nasaData && <h1 title= {nasaData.title} />}
                 {console.log(nasaData.title)}
                 <StyledTitle className ='title'>
                    {nasaData.title}
        

                 </StyledTitle>
      </div>
  )  
} 
export default DataContainer;