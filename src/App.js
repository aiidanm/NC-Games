import './App.css';
import Header from './components/header';
import HomeButtons from './components/buttons';
import ReviewsPage from './components/reviewsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header /> <HomeButtons /></>}/>
        <Route path='/categories' element={<Header/>}/>
        <Route path='/reviews' element={<><Header/> <ReviewsPage /> </>}/>
      </Routes>
    </div>
  );
}

export default App;
