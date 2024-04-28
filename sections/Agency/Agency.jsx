import Image from "next/image";

import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledEachContainer,
  StyledImageContainer,
} from "./elements";

export const Agency = ({ image, title, description, ctaText, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledEachContainer>
        
        </StyledEachContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        
      </StyledImageContainer>
    </StyledContainer>
  );
};
