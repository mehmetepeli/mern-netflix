import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData.js";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import {useEffect, useMemo, useState} from "react";
import axios from "axios";

const Home = () => {
    const MONTHS = useMemo(
        () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], []
    );
    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2QzNGM4MjVhOWEyNzMzZDYwMGI2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTgzMDE5NywiZXhwIjoxNjcyMjYyMTk3fQ.PvCe1-FfiENQ8J6hg1nseDq0cHmgIlMZg_IXvOiwVT8"
                    }
                });

                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                })

                statsList.map(item => setUserStats((prev) => [
                        ...prev,
                        {name:MONTHS[item._id-1], "New User": item.total}
                ]));
            } catch (err) {
                console.log(err);
            }
        }

        getStats();
    }, [MONTHS]);

    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
};

export default Home;
