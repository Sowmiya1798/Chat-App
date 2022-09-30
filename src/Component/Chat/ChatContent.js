import React, { Component } from 'react'
import chat from "./../../image/chat.jpeg";
import profile from "./../../image/a.png";
import './Chat.css'

export default class ChatContent extends Component {
  render() {
    return (
      <div>
      <div className='side'>
        <h2 className='heading'>Chat App</h2>
        <img src={chat} alt="chat"  className='image'/>
        <div>
        <button className='button1'><span><img src={profile} alt="chat"  className='image1'/></span>David</button>
        </div>
        <div>
        <button className='button1'><span><img src={profile} alt="chat"  className='image1'/></span>Saba</button>
        </div>
      </div>
      <div className='header'>
      </div>
      <div>
     <h3 className='head1'>Hi, Saba </h3>
     </div>
     <div>
     <h3 className='head2'>Hi, How are You </h3>
     </div>
     <div>
     <h3 className='head1'> Fine...  </h3>
     </div>
      <input placeholder='Type Message' className='in'></input>
      </div>
    )
  }
}
