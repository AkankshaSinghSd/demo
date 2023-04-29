import "./App.css";

const time = new Date().getHours();
let status = "";
const cssStyle = {};

if (time >= 1 && time < 12) {
  status = "Good Mornong";
  cssStyle.color = 'green';
} else if (time >= 12 && time < 19) {
  status = "Good AterNoon";
  cssStyle.color = 'Orange';
} else {
  status = "Good Night";
  cssStyle.color = 'red';
}

function App() {
  return (
    <>
    <div>
      <h1 className="heading">Hello Sir,<span style= {cssStyle}>{" "+ status}</span></h1>
    </div>
    </>
  );
}

export default App;
