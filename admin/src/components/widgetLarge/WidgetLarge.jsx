import "./widgetLarge.css";

const WidgetLarge = () => {
    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    };

    return (
        <div className="widgetLarge">
            <span className="widgetLargeTitle">Latest Transactions</span>
            <table className="widgetLargeTable">
                <tbody>
                    <tr className="widgetLargeTr">
                        <th className="widgetLargeTh">Customer</th>
                        <th className="widgetLargeTh">Date</th>
                        <th className="widgetLargeTh">Amount</th>
                        <th className="widgetLargeTh">Status</th>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus"><Button type="Approved"/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus"><Button type="Declined"/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus"><Button type="Pending"/></td>
                    </tr>
                    <tr className="widgetLargeTr">
                        <td className="widgetLargeUser">
                            <img
                                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                alt=""
                                className="widgetLargeImage"
                            />
                            <span className="widgetLargeName">Susan Carol</span>
                        </td>
                        <td className="widgetLargeDate">2 Jun 2022</td>
                        <td className="widgetLargeAmount">$122.00</td>
                        <td className="widgetLargeStatus"><Button type="Approved"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default WidgetLarge;
