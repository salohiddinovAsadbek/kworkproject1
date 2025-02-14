import "../style/title.css";

function Title({ info, title }) {
  return (
    <div className="titleMain">
      <p>{info}</p>
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
