import React from 'react';
import styled from 'styled-components'
const StyledButton = styled.button`
height: 100px,
display: "flex",
border: "1px solid black",
padding: 8px;,
justifyContent: "center",
  alignItems: "center",
  flex-direction:column
}

`
const Data = (props) => {
const { nasaData } = props;



return (
    <div>
        { nasaData && <img src ={nasaData.url} alt="nasa"/>}
            {console.log(nasaData)}
            <StyledButton className = "date">
                {nasaData.date}
            </StyledButton>
    </div>
)
}
export default Data;