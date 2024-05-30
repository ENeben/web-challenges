import "./styles.css";

export default function App() {
  return <Greeting name="Ernst" />;
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
