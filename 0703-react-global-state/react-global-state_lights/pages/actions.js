import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onLightsOn,
  onLightsOff,
  isAllLightsOn,
  isAllLightsOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onLightsOn={onLightsOn}
        onLightsOff={onLightsOff}
        isAllLightsOn={isAllLightsOn}
        isAllLightsOff={isAllLightsOff}
      />
    </>
  );
}
