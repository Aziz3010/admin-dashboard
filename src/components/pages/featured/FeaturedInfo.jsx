import React from 'react';
import './FeaturedInfo.css';

export default function FeaturedInfo() {
    return (
        <>
            <div className="Featured">
                {/* Revanue */}
                <div className="FeaturedItem">
                    <span className="FeaturedTitle">Revanue</span>
                    <div className="FeaturedMoney-box">
                        <span className="FeaturedMoneyPrice">$25</span>
                        <span className="FeaturedMoneyPriceRate">
                            <i className="fas fa-caret-down fa-fw FeaturedIcon negative"></i>
                            -10.23
                        </span>
                    </div>
                    <span className="FeaturedSub">Compared to last month</span>
                </div>
                {/* Sales */}
                <div className="FeaturedItem">
                    <span className="FeaturedTitle">Sales</span>
                    <div className="FeaturedMoney-box">
                        <span className="FeaturedMoneyPrice">$24</span>
                        <span className="FeaturedMoneyPriceRate">
                            <i className="fas fa-caret-down fa-fw FeaturedIcon negative"></i>
                            -5
                        </span>
                    </div>
                    <span className="FeaturedSub">Compared to last month</span>
                </div>
                {/* Cost */}
                <div className="FeaturedItem">
                    <span className="FeaturedTitle">Cost</span>
                    <div className="FeaturedMoney-box">
                        <span className="FeaturedMoneyPrice">$2</span>
                        <span className="FeaturedMoneyPriceRate">
                            <i className="fas fa-caret-up fa-fw FeaturedIcon"></i>
                            +2
                        </span>
                    </div>
                    <span className="FeaturedSub">Compared to last month</span>

                </div>
            </div>
        </>
    )
}
