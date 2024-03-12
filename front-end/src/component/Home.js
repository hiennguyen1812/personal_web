import "./Home.css"
import Sidebar from "./Page/Sidebar/Sidebar";
import Center from "./Page/Center/Center";
import Info from "./Page/Info/Info";


const Home = () => {
  return (
    <div class="container">
      <div class="left">
        <Sidebar />
      </div>

      <div class="center">
        <Center />
      </div>

      <div class="right">
        <Info />
      </div>
    </div>
  );
};

export default Home;
