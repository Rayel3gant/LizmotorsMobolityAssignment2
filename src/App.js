import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App w-full min-h-screen bg-[#F0F0F0]">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
