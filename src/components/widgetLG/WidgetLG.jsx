import React from 'react';
import './WidgetLG.css';
import img from '../../images/p_pic.jpg';

export default function WidgetLG() {

    const Button = ({ type, text }) => {
        return <p className={"alert alert-" + type + " p-1 m-0"}>{text}</p>
    }


    return (
        <>
            <div className="WidgetLG">
                <h3 className="WidgetLGTitle">Latest transactions</h3>

                <div className="table-responsive">
                    <table className="table table-striped text-center">

                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="customer">
                                    <img src={img} alt="person" className="customerImage" />
                                    <span className="customerName">Ahmed</span>
                                </td>
                                <td>30/10/21</td>
                                <td>$5000</td>
                                <td>
                                    <Button type="success" text="Approved" />
                                </td>
                            </tr>

                            <tr>
                                <td className="customer">
                                    <img src={img} alt="person" className="customerImage" />
                                    <span className="customerName">Ali</span>
                                </td>
                                <td>11/05/21</td>
                                <td>$4200</td>
                                <td>
                                    <Button type="warning" text="Pending" />
                                </td>
                            </tr>

                            <tr>
                                <td className="customer">
                                    <img src={img} alt="person" className="customerImage" />
                                    <span className="customerName">Mohamed</span>
                                </td>
                                <td>14/02/21</td>
                                <td>$2000</td>
                                <td>
                                    <Button type="danger" text="Declined" />
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}
