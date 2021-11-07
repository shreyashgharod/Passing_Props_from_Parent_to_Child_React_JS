export default function ChildComp(props) {
  function DisplayIdentity() {
    document.getElementById("compId").style.display = "block";
  }

  return (
    <div className="ChildComp">
      <h1>I am a {props.identity}</h1>
      <hr />
      <h2> This button is in which component ?</h2>
      <button onClick={DisplayIdentity}> Click and check </button>
      <hr />
      <h2 id="compId">{props.identity}</h2>
    </div>
  );
}
