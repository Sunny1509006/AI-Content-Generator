import ScrollToTop from "./Components/Common/ScrollToTop";
import { Home } from "./Components/Screen/Home";
import AuthProvider from './AuthProvider';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <ScrollToTop />
        <Home />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
