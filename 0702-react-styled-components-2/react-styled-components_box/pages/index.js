import styled from "styled-components";
import StyledBox from "@/components/BoxWithStyledComponents.js";
import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName";

const StyledContainer = styled.div`
  display: flex;
  padding: 5px;
`;

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </StyledContainer>
  );
}
