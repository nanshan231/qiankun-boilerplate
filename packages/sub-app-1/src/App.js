import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const gotoPage = (path) => {
    navigate(path)
  };
  return (
    <div className="App">
      <button onClick={() => gotoPage('/page-1')}>sub-app-1-button-1</button>
      <button onClick={() => gotoPage('/page-2')}>sub-app-1-button-2</button>
      <Outlet />
    </div>
  );
}

export default App;
