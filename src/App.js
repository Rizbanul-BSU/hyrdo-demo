import Domain from "./pages/Domain";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

export default function App() {

  return (
   <Router>
     <Routes>
     <Route path = "/" element = {<Home/> } />
     <Route path = "/domain" element = {<Domain/>} />
     </Routes>
   </Router>
  );
}
