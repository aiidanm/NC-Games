import './App.css';
import Header from './components/header';
import HomeButtons from './components/Homebuttons';
import ReviewsPage from './components/AllreviewsPage';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ViewReview from './components/viewSingleReview';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Header /> <HomeButtons /></>}/>
        <Route path='/categories' element={<Header/>}/>
        <Route path='/reviews' element={<><Header/> <ReviewsPage /> </>}/>
        <Route path='/reviews/:review_id' element={<><Header /> <ViewReview /> </>}/>
      </Routes>
    </div>
  );
}

export default App;
