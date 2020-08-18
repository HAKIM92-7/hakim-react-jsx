import React from 'react';
import './style.css';
import './App.css';
import mySrcImage from "./mySrc.jpg"

function App() {
   
   
   return <div>
   
   <div className="app">

   <div style={{border:'solid 1px black',maxWidth:'100vw'}}>  

   <h1 className="title red">Your name here</h1>  
   <br/>

   

      <img src={mySrcImage}/> <br/>

      <img src = "/imageInPublic.jpg"/>  

</div>  

   <video width="320" height="240" controls>  

   <source src="myVideo.mp4" type="video/mp4"/> 

   </video>

   </div>

</div>


   

}

export default App;
