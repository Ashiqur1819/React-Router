import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const location = useLocation()
    const navigation = useNavigation()
    console.log(location)
    return (
      <div>
        <h2>This is the home page!!!</h2>
        <Header></Header>
        {navigation.state === "loading" ? (
          <h3>Loading...</h3>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </div>
    );
};

export default Home;