import { StyledTitle, StyledText, StyledContainer, StyledInfoBlock, StyledInfoSection } from "./element";

export const Search = ({ children, ...props }) => {
  return (
    <StyledContainer>
      <StyledInfoSection>
        <StyledInfoBlock>
          <StyledTitle>Search</StyledTitle>
          <StyledText>Comlete <b>brief writing or simple guidance</b> on that to include, we've got you covered.</StyledText>
        </StyledInfoBlock>
      </StyledInfoSection>
    </StyledContainer>
  );
};
