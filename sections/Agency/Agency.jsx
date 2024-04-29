import Image from "next/image";
import {
  StyledTextContainer,
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledEachContainer,
  StyledImageContainer,
  StyledBrief,
  StyledSearch,
} from "./elements";

export const Agency = ({ image, BgImage, title, description, ...props }) => {
  return (
    <StyledContainer style={{ backgroundImage: `url(${BgImage.src})` }} {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledEachContainer>
          <StyledBrief></StyledBrief>
        <StyledSearch></StyledSearch>

        </StyledEachContainer>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image layout="responsive" src={image.src} alt={image.alt} width={image.width} height={image.height} />
      </StyledImageContainer>
    </StyledContainer>
  );
};
