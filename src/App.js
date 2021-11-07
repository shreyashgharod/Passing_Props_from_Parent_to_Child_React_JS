import "./styles.css";
import ChildComp from "./ChildComp";

export default function App() {
  return (
    <div className="App">
      <h1>Who are you ?</h1>
      <ChildComp identity="Child Component"></ChildComp>
    </div>
  );
}
