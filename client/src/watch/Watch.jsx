import "./watch.scss";
import {ArrowBackIosOutlined} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";

const Watch = () => {
    const {state} = useLocation();
    const movie = state.movie;

    return (
        <div className="watch">
            <Link to="/">
                <div className="back"><ArrowBackIosOutlined/> Home</div>
            </Link>
            <video
                className="video"
                autoPlay="true"
                progress="true"
                loop="true"
                controls
                src={movie.trailer}
            />
        </div>
    );
}

export default Watch;
