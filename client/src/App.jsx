import "./app.scss";
import Home from "./home/Home";
import Watch from "./watch/Watch";
import Register from "./register/Register";
import Login from "./login/Login";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./authContext/AuthContext";

const App = () => {
    const {user} = useContext(AuthContext);

    console.log(user);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ user ? <Home /> : <Navigate to="/register" /> }/>
                <Route path="/register" element={ !user ? <Register /> : <Home /> }/>
                <Route path="/login" element={ !user ? <Login /> : <Navigate to="/"/> }/>
                {
                    user && (
                        <>
                            <Route path="/movies" element={<Home type="movie" />} />
                            <Route path="/series" element={<Home type="series" />} />
                            <Route path="/watch" element={<Watch />}/>
                        </>
                    )
                }
            </Routes>
        </BrowserRouter>
    );
}

export default App;
