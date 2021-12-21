import React from 'react';
import './WidgetSM.css';
import img from '../../images/p_pic.jpg';

export default function WidgetSM() {
    return (
        <>
            <div className="WidgetSM">
                <h3 className="WidgetSMTitle">New Join Members</h3>

                <ul className="WidgetSMList">
                    <li className="WidgetSMListItem">
                        <img src={img} alt="person" className="WidgetSMListItemImage" />

                        <div className="info">
                            <span className="info-name">ahmed mohammed abdalla</span>
                            <div className="info-bottom">
                                <span className="info-pos">Front End Developer</span>
                                <button className="btn btn-light btn-sm d-flex justify-content-center align-items-center"><i className="far fa-eye fa-fw mr-1"></i>Display</button>
                            </div>
                        </div>

                    </li>
                    <li className="WidgetSMListItem">
                        <img src={img} alt="person" className="WidgetSMListItemImage" />

                        <div className="info">
                            <span className="info-name">ahmed mohammed abdalla</span>
                            <div className="info-bottom">
                                <span className="info-pos">Front End Developer</span>
                                <button className="btn btn-light btn-sm d-flex justify-content-center align-items-center"><i className="far fa-eye fa-fw mr-1"></i>Display</button>
                            </div>
                        </div>

                    </li>
                    <li className="WidgetSMListItem">
                        <img src={img} alt="person" className="WidgetSMListItemImage" />

                        <div className="info">
                            <span className="info-name">ahmed mohammed abdalla</span>
                            <div className="info-bottom">
                                <span className="info-pos">Front End Developer</span>
                                <button className="btn btn-light btn-sm d-flex justify-content-center align-items-center"><i className="far fa-eye fa-fw mr-1"></i>Display</button>
                            </div>
                        </div>

                    </li>
                </ul>

            </div>
        </>
    )
}
