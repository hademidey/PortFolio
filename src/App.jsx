import Navbar from "./Components/Navbar";
import SideNav from "./Components/sideNav";
import Main from "./Components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex ">
      {/* <SideNav /> */}
      <Main />
      </div>
    </div>
  );
}

export default App;
