import React from "react";
import {NavLink} from "react-router-dom";
import Post from "../Post/Post";

const MessagesItem = (props)=>{
    let path = '/messages/' + props.id;

    return (

        <NavLink to={path}>
            <div className="rightmsg">
                <div className="message-radius">
                    <img src={props.image} alt="" title=""/>
                </div>
                <div className="message-heading">
                    {props.name}
                    <p>{props.text}</p>
                </div>
                <div className="message-heading1">
                    <span>{props.data}</span>
                </div>
                <div className="clearfix"></div>
                <hr/>
            </div>
        </NavLink>
    )
}

const Messages = (props)=>{

    let dialogsElements = props.dialogsData.map( dialog =>  <MessagesItem image={dialog.image} name={dialog.name} id={dialog.id} text={dialog.text} data={dialog.data}/>);

    return(
        <div className="container-fluid pb-0" >
            <div className="row">
                <div className="col-lg-4 msg col-sm-12">
                    <div className="rightbox">
                        <div className="rightside">
                            <a href="#"><img src="images/listing/search.png" alt=""/></a>
                            <input type="text" placeholder="Enter a keyword"/>
                        </div>
                        <div className="msg-scroll">
                            {dialogsElements}
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="main-conversation-box">
                        <div className="message-bar-head">
                            <div className="usr-msg-details">
                                <div className="usr-ms-img">
                                    <img src="images/messages/1_chat.jpg" alt="" className="mCS_img_loaded"/>
                                </div>
                                <div className="usr-mg-info">
                                    <h3>John Doe</h3>
                                    <p>Online</p>
                                </div>
                            </div>
                            <div className="message-heading2">
                                <i className="fas fa-trash-alt"></i>
                            </div>
                        </div>
                        <div className="messages-line mCustomScrollbar _mCS_1">
                            <div id="mCSB_1"
                                 className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                                 tabIndex="0" style={{maxheight: "none"}}>
                                <div id="mCSB_1_container" className="mCSB_container"
                                     style={{ position: "relative", top: "0px", left: "0px"}} dir="ltr">
                                    <div className="main-message-box">
                                        <div className="messg-usr-img">
                                            <img src="images/messages/1_chat.jpg" alt=""
                                                 className="mCS_img_loaded"/>
                                        </div>
                                        <div className="message-dt">
                                            <div className="message-inner-dt img-bx">
                                                <img src="images/resources/mt-img1.png" alt=""
                                                     className="mCS_img_loaded"/>
                                                <img src="images/resources/mt-img2.png" alt=""
                                                     className="mCS_img_loaded"/>
                                                <img src="images/resources/mt-img3.png" alt=""
                                                     className="mCS_img_loaded"/>
                                            </div>
                                            <span>Sat, Aug 23, 1:08 PM</span>
                                        </div>
                                    </div>
                                    <div className="main-message-box ta-right">
                                        <div className="message-dt">
                                            <div className="message-inner-dt">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Donec rutrum congue leo eget malesuada. Vivamus suscipit
                                                    tortor eget felis porttitor.</p>
                                            </div>
                                            <span>Sat, Aug 23, 1:08 PM</span>
                                        </div>
                                    </div>
                                    <div className="main-message-box st3">
                                        <div className="message-dt st3">
                                            <div className="message-inner-dt">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Donec rutrum congue leo eget.</p>
                                            </div>
                                            <span>5 minutes ago</span>
                                        </div>
                                        <div className="messg-usr-img">
                                            <img src="images/messages/5_chat_small.jpg" alt=""
                                                 className="mCS_img_loaded"/>
                                        </div>
                                    </div>
                                    <div className="main-message-box ta-right">
                                        <div className="message-dt">
                                            <div className="message-inner-dt">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Donec rutrum congue leo eget malesuada. Vivamus suscipit
                                                    tortor eget felis porttitor.</p>
                                            </div>
                                            <span>Sat, Aug 23, 1:08 PM</span>
                                        </div>
                                    </div>
                                    <div className="main-message-box st3">
                                        <div className="message-dt st3">
                                            <div className="message-inner-dt">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Donec rutrum congue leo eget </p>
                                            </div>
                                            <span>Typing...</span>
                                        </div>
                                        <div className="messg-usr-img">
                                            <img src="images/messages/5_chat_small.jpg" alt=""
                                                 className="mCS_img_loaded"/>
                                        </div>
                                    </div>

                                </div>
                                <div id="mCSB_1_scrollbar_vertical"
                                     className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
                                     style={{display: "block"}}>
                                    <div className="mCSB_draggerContainer">
                                        <div id="mCSB_1_dragger_vertical" className="mCSB_dragger"
                                             style={{position: "absolute", minheight: "30px", display: "block", height: "458px", maxheight: "594px", top: "0px"}}>
                                            <div className="mCSB_dragger_bar"
                                                 style={{lineheight: "30px"}}></div>
                                        </div>
                                        <div className="mCSB_draggerRail"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message-send-area">
                            <form>
                                <div className="mf-field">
                                    <input type="text" name="message" placeholder="Type a message here"/>
                                    <button type="submit">Send</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;