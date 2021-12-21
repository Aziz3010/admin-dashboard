import React from 'react';
import WidgetLG from '../../widgetLG/WidgetLG';
import WidgetSM from '../../widgetSM/WidgetSM';
import Chart from '../../chart/Chart';
import FeaturedInfo from '../featured/FeaturedInfo';
import './Home.css';
import { userData } from '../../../data';

export default function Home() {
    return (
        <>
            <div className="Home">
                <FeaturedInfo />
                <Chart title="User Analytics" data={userData} datakey="Active_User" grid="3 3" />
                <div className="homeWidgets">
                    <WidgetSM />
                    <WidgetLG />
                </div>
            </div>
        </>
    )
}
