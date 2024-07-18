import { StyledButton } from "./Button.styled";

export default function Button({ onClick, text }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text}
    </StyledButton>
  );
}
