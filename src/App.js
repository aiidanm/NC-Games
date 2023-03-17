import "./App.css";
import Header from "./components/header";
import HomeButtons from "./components/Homebuttons";
import ReviewsPage from "./components/AllreviewsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewReview from "./components/viewSingleReview";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/loginpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <>
              <Header /> <HomeButtons />
            </>
          }
        />
        <Route path="/categories" element={<Header />} />
        <Route
          path="/reviews"
          element={
            <>
              <Header /> <ReviewsPage />{" "}
            </>
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <>
              <Header /> <ViewReview />{" "}
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header /> <ErrorPage />{" "}
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
