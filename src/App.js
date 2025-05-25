import './App.css';
import Cover from './Firstpage/firstcover';
import NAVPage from './Secondpage/NAVPage';
import SetInfo from './Settingpage/Infopage';
import TodayFortune from './Fortune/TodayFortune';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="FirstPage-Background">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/NAV" element={<NAVPage />} />
            <Route path='/User' element={<SetInfo/>}/>
            <Route path='/TodaysFortune' element={<TodayFortune/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;