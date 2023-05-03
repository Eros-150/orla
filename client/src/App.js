import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Body from "./components/body.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;