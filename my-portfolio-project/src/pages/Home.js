import React from 'react'
import myimg from "../assests/images/myimg.jpg";
import bgimg from "../assests/images/bgimg1.jpg";

function Home() {
  return (
    <>
      <div className='profile'>
        <img src={bgimg} width={"100%"} height={"665px"} />
        <div className='mainOutline'>
          <div className='pro-img'>
            <img src={myimg} height={"500px"} />
          </div>
          <div className='pro-msg'>
            <p>Hello World,<br></br> This is <b>Sathik Ali</b></p>
            <p className='designation'>FrontEnd ReactJS developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
