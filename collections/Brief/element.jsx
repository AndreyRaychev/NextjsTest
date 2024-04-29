import styled from "styled-components";

export const StyledContainer = styled.div`
background-color: gray;
width: 30%;
border-radius: 10px;
border: 2px solid transparent;
position: absolute;
right: 20%;

:hover {
  border-color: blue;
  border-width: 3px; 
}

:hover h2 {
  text-decoration: underline blue;
  color: blue;
}
`;

export const StyledInfoSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledInfoBlock = styled.div`
  width: 70%;
  text-align: left;
  float: right;
  margin-left: auto;
`;

export const StyledTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: -0.5em;
`;

export const StyledText = styled.p`
font-size: 1em;
padding-right: 1em;
`;