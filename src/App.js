import './App.css';
import RoutePath from './route/RoutePath';
import { Navbar, Header } from "./component/index"
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <RoutePath />
    </div>
  );
}

export default App;
