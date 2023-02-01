import React from "react";
import "./Home.css"

export default function Homepage(props) {
    return(
        <div className="homepage-container">
            <header className="home-header">
                <nav className="home-navbar">
                    <ul className="nav-ul">
                        <li className="nav-li" ><img className="navIcon" src={props.navAppleLogo} /></li>
                        <li className="nav-li"><a href="#">Store</a> </li>
                        <li className="nav-li"><a href="#">Mac</a> </li>
                        <li className="nav-li"><a href="#">iphone</a> </li>
                        <li className="nav-li"><a href="#">ipad</a> </li>
                        <li className="nav-li"><a href="#">Watch</a> </li>
                        <li className="nav-li"><a href="#">AirPods</a> </li>
                        <li className="nav-li"><a href="#">Tv & Home</a> </li>
                        <li className="nav-li"><a href="#">Only on Apple</a> </li>
                        <li className="nav-li"><a href="#">Accessories</a> </li>
                        <li className="nav-li"><a href="#">Support</a> </li>
                        <li className="nav-li" ><a href="#"><img className="navIcon" src={props.navSearchIcon} /></a></li>
                        <li className="nav-li" ><a href="#"><img className="navIcon" src={props.navStoreIcon} /></a></li>
                    </ul>
                </nav>

                <div className="home-heading">
                    <h1 className="apple-heading">Apple Shopping Event</h1>
                    <p className="apple-para">From November 25 to 28, get an Apple Gift Card when you buy an eligible product.</p>
                    <a href="#" className="apple-link">Get an early look</a>
                </div>
            </header>

            {/* section 2  */}
            <section id="home-second">
                <img src={props.divpng} className="div-png" />
            </section>

            {/* section 3 */}
            <section id="home-third">
                <div className="up-third">
                    <h1 className="up-third-iphone">iphone 14</h1>
                    <p className="big-and-biggle">Big and Bigger</p>
                    <div className="learn-buy">
                        <a href="#" className="learn-more">Learn more</a>
                        <a href="#" className="iphone-buy">Buy</a>
                    </div>
                </div>
                    <img className="iphonefourteen" src={props.iphonefourteen} />
            </section>
            
            {/* section 4 */}
            <section id="home-fourth">
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgone}/></div>
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgtwo}/></div>
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgthree}/></div>
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgfour}/></div>
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgfive}/></div>
                <div className="homeitems"><img className="homeitems-img" src={props.itemimgsix}/></div>
            </section>

        </div>
    )
}