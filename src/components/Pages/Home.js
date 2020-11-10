import React from "react";

const Home = ()=>{
    return(
        <div className="container-fluid pb-0">
            <div className="row">
                <div className="col-md-12">
                    <div className="advertisment-banner">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-sm-12">
                                <div className="banner-heading">
                                    <h3>World's Largest Classifieds and Listing Portal.</h3>
                                    <h5>Post Unlimited Classifieds Listing Free of Cost From Anywhere.</h5>
                                    <a href="upload_listing.html" className="add-btn-bnnr">Add Lisiting</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-12">
                                <div className="ill-img">
                                    <img src="images/svg/undraw_01.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" id="myBtnContainer">
                <div className="col-xl-10 col-lg-10 col-md-8 col-sm-12 px-0">
                    <ul className="category-links">
                        <li className="nav-item"><a href="index_1.html"
                                                    className="nav-link active"> All </a></li>
                        <li className="nav-item"><a href="index_2.html" className="nav-link"> Places &
                            Events </a></li>
                        <li className="nav-item"><a href="index_3.html" className="nav-link">Real
                            Estate </a></li>
                        <li className="nav-item"><a href="index_4.html" className="nav-link">Cars &
                            Bikes </a></li>
                        <li className="nav-item"><a href="index_5.html" className="nav-link">Electronic </a>
                        </li>
                        <li className="nav-item"><a href="index_6.html" className="nav-link">Others </a>
                        </li>
                    </ul>
                </div>
                <div className="text-right radar col-xl-2 col-lg-2 col-md-4 col-sm-12 p-right px-0">
                    <a href="map_listing.html"><img src="images/svg/radar-icon.svg" alt=""/>Map Lisitng</a>
                </div>
            </div>
            <div className="video-block section-padding">
                <div className="row">
                    <div className="tabby">
                        <div className="htitle col-md-12">
                            <h5>Latest Listing</h5>
                            <a href="#">Show More</a>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="event_listing_detail_view.html" target="_blank"
                                       className="over-bg"></a>
                                    <img src="images/homepage/latest/01_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="event_listing_detail_view.html">Global Festival </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            India
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="realestate_sell_listing_detail_view.html"
                                       className="over-bg"></a>
                                    <img src="images/homepage/realestate/ig-1.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="realestate_sell_listing_detail_view.html">House for
                                            Sale </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York City
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="cinema_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/9_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="cinema_listing_detail_view.html"> Pixel Cinema </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            Austrilia
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/03_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity"> By Rock Smith</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/latest/03_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="cafe_listing_detail_view.html">Coffee House </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            London
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/ig-11.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="restaurant_listing_detail_view.html">Resturent Name</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            Unitied State of America
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/8_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="cafe_listing_detail_view.html">Coffee House </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            South Africa
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/03_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By Jassica William </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="shop_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/realestate/ig-33.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="shop_listing_detail_view.html">Shop for Rent</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="historical_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/ig-41.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="historical_listing_detail_view.html">Historical
                                            Place</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-block section-padding">
                <div className="row">
                    <div className="tabby">
                        <div className="htitle col-md-12">
                            <h5>Recommended</h5>
                            <a href="#">Show More</a>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="event_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/recomanded/04_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="event_listing_detail_view.html">Music Event </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            Maxico City
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="shop_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/realestate/ig-35.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="shop_listing_detail_view.html">Shop for Sale </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 ">
                            <div className="box">
                                <div className="box-img">
                                    <a href="restaurant_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/recomanded/05_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="restaurant_listing_detail_view.html">Basant
                                            Restaurant</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/03_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="cafe_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/ig-1.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="cafe_listing_detail_view.html">Coffee Cafe</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="shop_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/realestate/ig-39.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="shop_listing_detail_view.html">Shop for Rent</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="historical_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/place/ig-43.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="historical_listing_detail_view.html">Historical
                                            Place</a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York city
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By john Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="event_listing_detail_view.html" className="over-bg"></a>
                                    <img src="images/homepage/latest/01_img.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="event_listing_detail_view.html"> Global Festival </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            India
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/01_dp.png" className="img" alt=""
                                         title=""/>
                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By John Doe</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="box">
                                <div className="box-img">
                                    <a href="realestate_sell_listing_detail_view.html"
                                       className="over-bg"></a>
                                    <img src="images/homepage/realestate/ig-1.jpg" className="img" alt=""
                                         title=""/>
                                    <div className="box-heading1">
                                        <a href="realestate_sell_listing_detail_view.html"> House for
                                            Sale </a>
                                        <div className="box-heading2">
                                            <svg xmlns="http://www.w3.org/2000/svg"

                                                 preserveAspectRatio="xMidYMid" width="12" height="14"
                                                 className="location-icon" viewBox="0 0 12 14">
                                                <path
                                                    d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>
                                            </svg>
                                            New York City
                                        </div>
                                    </div>
                                    <div className="favorite">
                                        <i className="far fa-heart"></i>
                                    </div>
                                </div>
                                <div className="box-radius">
                                    <img src="images/homepage/latest/02_dp.png" className="img" alt=""
                                         title=""/>

                                </div>
                                <div className="box-heading3">
                                    <a href="user_detail_view.html#activity">By Jassica William</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="video-block section-padding">*/}
            {/*    <div className="row">*/}
            {/*        <div className="htitle col-md-12">*/}
            {/*            <h5>Places & Events Listing</h5>*/}
            {/*            <a href="#">Show More</a>*/}
            {/*        </div>*/}
            {/*        <section id="demos1">*/}
            {/*            <div className="col-md-12">*/}
            {/*                <div className="large-12 columns">*/}
            {/*                    <div className="owl-carousel owl-theme">*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="event_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-17.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="event_listing_detail_view.html">Global*/}
            {/*                                                Festival</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Nepal*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By john Doe</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="cinema_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-27.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="cinema_listing_detail_view.html">Pixel*/}
            {/*                                                Cinema</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Canada*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="restaurant_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-4.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="restaurant_listing_detail_view.html">B7*/}
            {/*                                                Restaurant</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Sydney*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock Smith</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="event_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-18.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="event_listing_detail_view.html">Music Night*/}
            {/*                                                Event</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Ludhiana, India*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="historical_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-44.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="historical_listing_detail_view.html">Meusuam*/}
            {/*                                                Historical</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Delhi, India*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="cinema_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-29.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="cinema_listing_detail_view.html">Pixel*/}
            {/*                                                Cinema</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Dhaka, Bangladesh*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock Smith </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="cafe_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-1.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="cafe_listing_detail_view.html">Coffee*/}
            {/*                                                Cafe</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Australia*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="restaurant_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-10.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="restaurant_listing_detail_view.html">Basant*/}
            {/*                                                Restaurant</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Toronto, Canada*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="historical_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-45.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="historical_listing_detail_view.html">Historical*/}
            {/*                                                Place</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Kathmandu, Nepal*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Zoena Singh</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="cafe_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-4.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="cafe_listing_detail_view.html">Coffee*/}
            {/*                                                cafe</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Birgunj, Nepal*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock Smith </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="event_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-20.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="event_listing_detail_view.html">Event</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Mumbai, India*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}

            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="cinema_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/place/ig-28.jpg" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="cinema_listing_detail_view.html">PVR*/}
            {/*                                                Cinema</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Los Angels*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock*/}
            {/*                                        William </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="video-block section-padding">*/}
            {/*    <div className="row">*/}
            {/*        <div className="htitle col-md-12">*/}
            {/*            <h5>Real Estate</h5>*/}
            {/*            <a href="#">Show More</a>*/}
            {/*        </div>*/}
            {/*        <section id="demos">*/}
            {/*            <div className="col-md-12">*/}
            {/*                <div className="large-12 columns">*/}
            {/*                    <div className="owl-carousel owl-theme">*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-1.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">House*/}
            {/*                                                For Sale</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                India*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_rent_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-2.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_rent_listing_detail_view.html">House*/}
            {/*                                                for rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Australia*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-13.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">Sale*/}
            {/*                                                Shop</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Nepal*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock Smith </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-6.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">Apartment*/}
            {/*                                                for Rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Bangladesh*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_rent_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-9.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_rent_listing_detail_view.html">Office*/}
            {/*                                                for Rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Canada*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-4.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">House*/}
            {/*                                                for Sale</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Austria*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock William</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_rent_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-10.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_rent_listing_detail_view.html">Room*/}
            {/*                                                for Rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                London*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_rent_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-12.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_rent_listing_detail_view.html">Office*/}
            {/*                                                Space for Rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Pakistan*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        william </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-13.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">Shop*/}
            {/*                                                for Sale</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                Sydney*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock Smith </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-2.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="#realestate_sell_listing_detail_view.html">House*/}
            {/*                                                for Sale</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                South Africa*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/01_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By John Doe </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_sell_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-5.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_sell_listing_detail_view.html">Apartment*/}
            {/*                                                for Sale</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                California*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/02_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Jassica*/}
            {/*                                        William</a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="item">*/}
            {/*                            <div className="box">*/}
            {/*                                <div className="box-img">*/}
            {/*                                    <a href="realestate_rent_listing_detail_view.html"*/}
            {/*                                       className="over-bg"></a>*/}
            {/*                                    <img src="images/homepage/realestate/ig-1.jpg"*/}
            {/*                                         className="img" alt="" title=""/>*/}
            {/*                                        <div className="box-heading1">*/}
            {/*                                            <a href="realestate_rent_listing_detail_view.html">Shop*/}
            {/*                                                for Rent</a>*/}
            {/*                                            <div className="box-heading2">*/}
            {/*                                                <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     */}
            {/*                                                     preserveAspectRatio="xMidYMid" width="12"*/}
            {/*                                                     height="14" className="location-icon"*/}
            {/*                                                     viewBox="0 0 12 14">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M6.720,10.847 C6.242,11.332 5.477,11.332 4.998,10.847 C2.719,8.534 1.555,6.413 1.555,4.454 C1.555,1.994 3.482,-0.000 5.859,-0.000 C8.236,-0.000 10.163,1.994 10.163,4.454 C10.163,6.413 8.999,8.534 6.720,10.847 ZM8.934,4.454 C8.934,2.697 7.557,1.273 5.859,1.273 C4.161,1.273 2.785,2.697 2.785,4.454 C2.785,6.004 3.793,7.842 5.859,9.938 C7.925,7.842 8.934,6.004 8.934,4.454 ZM5.859,6.045 C4.840,6.045 4.015,5.191 4.015,4.136 C4.015,3.082 4.840,2.227 5.859,2.227 C6.878,2.227 7.704,3.082 7.704,4.136 C7.704,5.191 6.878,6.045 5.859,6.045 ZM5.859,4.773 C6.199,4.773 6.474,4.488 6.474,4.136 C6.474,3.785 6.199,3.500 5.859,3.500 C5.520,3.500 5.244,3.785 5.244,4.136 C5.244,4.488 5.520,4.773 5.859,4.773 ZM2.165,9.509 C2.483,9.385 2.838,9.552 2.957,9.881 C3.076,10.210 2.915,10.577 2.597,10.700 C1.895,10.973 1.555,11.285 1.555,11.454 C1.555,11.987 3.462,12.727 5.859,12.727 C8.256,12.727 10.163,11.987 10.163,11.454 C10.163,11.285 9.823,10.973 9.122,10.700 C8.804,10.577 8.643,10.210 8.762,9.881 C8.881,9.552 9.235,9.385 9.553,9.509 C10.684,9.948 11.393,10.598 11.393,11.454 C11.393,13.031 8.895,14.000 5.859,14.000 C2.823,14.000 0.326,13.031 0.326,11.454 C0.326,10.598 1.034,9.948 2.165,9.509 Z"></path>*/}
            {/*                                                </svg>*/}
            {/*                                                London*/}
            {/*                                            </div>*/}
            {/*                                        </div>*/}
            {/*                                        <div className="favorite">*/}
            {/*                                            <i className="far fa-heart"></i>*/}
            {/*                                        </div>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-radius">*/}
            {/*                                    <img src="images/homepage/latest/03_dp.png" className="img"*/}
            {/*                                         alt="" title=""/>*/}
            {/*                                </div>*/}
            {/*                                <div className="box-heading3">*/}
            {/*                                    <a href="user_detail_view.html#activity">By Rock*/}
            {/*                                        William </a>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="view-spinner">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Home