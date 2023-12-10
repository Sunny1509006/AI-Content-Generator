import ScrollToTop from "./Components/Common/ScrollToTop";
import { Home } from "./Components/Screen/Home";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div>
      
      <Router>
      <ScrollToTop />
        <Home />
      </Router>
    </div>
  );
}

export default App;
