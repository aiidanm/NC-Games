import "./App.css";
import Header from "./components/header";
import HomeButtons from "./components/Homebuttons";
import ReviewsPage from "./components/AllreviewsPage";
import {Routes, Route } from "react-router-dom";
import ViewReview from "./components/viewSingleReview";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/loginpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <>
               <HomeButtons />
            </>
          }
        />
        <Route path="/categories" element={<></>} />
        <Route
          path="/reviews"
          element={
            <>
               <ReviewsPage />{" "}
            </>
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <>
               <ViewReview />{" "}
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
               <ErrorPage />{" "}
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
