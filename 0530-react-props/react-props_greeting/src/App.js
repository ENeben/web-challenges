import "./styles.css";

export default function App() {
  return <Greeting name="Andrea" />;
}

function Greeting({ name }) {
  return (
    <p>
      Hello,{" "}
      {name === "Feline" || name === "Andrea" || name === "Jessica"
        ? "Coach"
        : name}
      !
    </p>
  );
}
