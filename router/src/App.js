import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Videos from './pages/Videos';
import Video from './pages/Video';
function App() {
  return (
  <div>
    <Routes>
      <Route path = '/' element= {<Homepage/>} />
      <Route path = '/videos' element= {<Videos/>}/>
      <Route path = '/videos/:videoId' element= {<Video/>}/>
     
    </Routes>

    </div>
  
   
  );
}

export default App;
