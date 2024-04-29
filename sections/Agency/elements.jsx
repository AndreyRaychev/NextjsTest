import styled from "styled-components";
import { Button, SectionContainer, SectionBigHeading, SectionSubheading } from "~/components";
import { Brief } from "../../collections/Brief";
import { Search } from "../../collections/Search";

export const StyledBrief = styled((props) => <Brief variant="contained" color="main" />)`
  margin-top: 10rem;
  padding-bottom: 0;
`;

export const StyledSearch = styled((props) => <Search variant="contained" color="main" />)`
  margin-top: 10rem;
  padding-bottom: 0;
`;

export const StyledContainer = styled(({ height, ...props }) => <SectionContainer {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || 'auto'};
  text-align: center;
`;

export const StyledGetStartedBtn = styled((props) => <Button {...props} variant="contained" color="main" />)`
  margin-top: 4.375rem;
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
`;

export const StyledDescription = styled((props) => <SectionSubheading {...props} />)`
margin-top: 0;
font-size: 1.5rem;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
  position: center;
`;

export const StyledEachContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const StyledImageContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 32.03rem;
  max-height: 65rem;
  width: 80%;
  height: 80%;
  margin-right: 40rem;
`;
