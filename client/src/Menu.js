import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import PageRoutes from "./PageRoutes";
function Menu() {
  return (
    <BrowserRouter>
      <Nav />
      <PageRoutes />
    </BrowserRouter>
  );
}

export default Menu;
