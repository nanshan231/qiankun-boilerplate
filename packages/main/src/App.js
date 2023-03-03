import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const goToSubApp = (path) => {
    navigate(path);
  }
  return (
    <div className="App">
      <button onClick={() => goToSubApp('/sub-app-1')}>sub app 1</button>
      <button onClick={() => goToSubApp('/sub-app-2')}>sub app 2</button>
      <div id='container'></div>
    </div>
  );
}


export default App;