import './App.css';
import Display from './components/Display';
// import Player from './components/Player';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="h-screen bg-black">
      <div className='h-[100%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      {/* <Player/> */}
    </div>
  );
}

export default App;
