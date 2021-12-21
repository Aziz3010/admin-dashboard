import React from 'react';
import img from '../../../images/p_pic.jpg';
import { Link } from 'react-router-dom';
import './Product.css';
import Chart from '../../chart/Chart';
import { productData } from '../../../data';

export default function Product() {
    return (
        <>
            <div className="Product">
                <div className="headContainer">
                    <h1>Product</h1>
                    <Link to="/newProduct" className="btn btn-primary btn-sm">New Product</Link>
                </div>

                <div className="ProductTop">

                    <div className="ProductTopLeft">
                        <Chart title="Sales Performance" data={productData} datakey="Sales" grid="3 3" />
                    </div>

                    <div className="ProductTopRight">

                        <div className="ProductInfoTop">
                            <img src={img} className="ProductImage" alt="Product" />
                            <h4>Mobile</h4>
                        </div>

                        <div className="ProductInfoBottom">
                            <div className="ProductInfoItem">
                                <span className="ProductInfoKey">Id:</span>
                                <span className="ProductInfoValue">123</span>
                            </div>
                            <div className="ProductInfoItem">
                                <span className="ProductInfoKey">Price:</span>
                                <span className="ProductInfoValue">5000</span>
                            </div>
                            <div className="ProductInfoItem">
                                <span className="ProductInfoKey">Sales:</span>
                                <span className="ProductInfoValue">2000</span>
                            </div>
                            <div className="ProductInfoItem">
                                <span className="ProductInfoKey">Active:</span>
                                <span className="ProductInfoValue">Yes</span>
                            </div>
                            <div className="ProductInfoItem">
                                <span className="ProductInfoKey">In stock:</span>
                                <span className="ProductInfoValue">No</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="ProductBottom">
                    <form className="Productform">
                        <div className="ProductBottomLeft">

                            {/* ProductName */}
                            <div className="form-group d-flex justify-content-center align-items-center">
                                <label className="col-2 col-form-label text-center">Product</label>
                                <input className="col-10 form-control" type="text" value="Mobile" name="ProductName" />
                            </div>

                            {/* Active */}
                            <div className="form-group d-flex justify-content-center align-items-center">
                                <label className="col-2 col-form-label text-center">Active</label>
                                <div className="col-10 pl-0">
                                    <select name="active" id="active">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                            {/* In stock */}
                            <div className="form-group d-flex justify-content-center align-items-center">
                                <label className="col-2 col-form-label text-center">In stock</label>
                                <div className="col-10 pl-0">
                                    <select name="In-stock" id="In-stock">
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="ProductBottomRight">

                            <div className="ProductBottomImage">
                                <img src={img} alt="image" className="ProductBottomImg" />
                                <label htmlFor="upload">
                                    <i className="fas fa-upload fa-fw"></i>
                                    <input id="upload" className="d-none" type="file" />
                                </label>
                            </div>

                            <div className="btn">
                                <button className="btn btn-primary btn-sm">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
