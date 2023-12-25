import "./widgetSmall.css";
import {Visibility} from "@material-ui/icons";
import {useEffect, useState} from "react";
import axios from "axios";

const WidgetSmall = () => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token:
                            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setNewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getNewUsers();
    }, []);

    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                {
                    newUsers.map((user,item) => (
                        <li className="widgetSmallListItem" key={item}>
                            <img
                                src={user.profilePicture || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
                                alt=""
                                className="widgetSmallImage"
                            />
                            <div className="widgetSmallUser">
                                <span className="widgetSmallUsername">{user.username}</span>
                            </div>
                            <button className="widgetSmallButton">
                                <Visibility className="widgetSmallIcon"/> Display
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default WidgetSmall;
