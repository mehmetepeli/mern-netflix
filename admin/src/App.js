import "./app.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Lists from "./pages/lists/Lists";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/login/Login";
import AppLayout from "./AppLayout";
import {useContext} from "react";
import {AuthContext} from "./context/authContext/AuthContext";

function App() {
    const {user} = useContext(AuthContext);

  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={user ? <Navigate to="/" replace /> : <Login/>} />
              { user &&
                  <Route element={<AppLayout />}>
                      <Route index element={<Home />} />
                      <Route path="/users" element={<UserList />} />
                      <Route path="/user/:userId" element={<User />} />
                      <Route path="/newUser" element={<NewUser />} />
                      <Route path="/movies" element={<ProductList />} />
                      <Route path="/product/:productId" element={<Product />} />
                      <Route path="/new-product" element={<NewProduct />} />
                      <Route path="/lists" element={<Lists />} />
                      <Route path="/list/:listId" element={<List />} />
                      <Route path="/new-list" element={<NewList />} />
                  </Route>
              }
          </Routes>
      </BrowserRouter>
  );
}

export default App;
