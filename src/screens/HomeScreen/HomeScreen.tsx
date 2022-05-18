import React from 'react';
import './HomeScreen.css';
import Logo from '../../assets/Logo.png'
// import scroll from '../../assets/scroll.gif'
// import flechaInformativa from '../../assets/flechaInformativa.png'
// import comercial from '../../assets/comercial.png'


function HomeScreen() {
  return (
    <div>
      {/* <div className='home'>
          <h1>Esto es el Home!</h1>
      </div> */}
      <section  className='banner' style={{flexDirection: 'column', alignItems: 'center'}}>
      <div style={{flexDirection:'row', alignItems: 'center', marginBottom: 200, justifyContent:'center'}}>
        <h1 style={{ color:'white', textTransform: "uppercase"}}>Tableros de Control</h1>
        <div style={{width:100, height: 3, backgroundColor:'#ef3742'}}></div>
      </div>
      
      </section>
     {/* <section className="info">
       <div className='info1'>
        
      </div>
      </section> */}
    </div>
  );
}

export default HomeScreen;
