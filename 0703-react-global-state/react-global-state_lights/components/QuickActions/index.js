import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onLightsOn,
  onLightsOff,
  isAllLightsOn,
  isAllLightsOff,
}) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onLightsOff} disabled={isAllLightsOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onLightsOn} disabled={isAllLightsOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
