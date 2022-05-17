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
      <div style={{flexDirection: 'row', alignItems: 'center', marginBottom: 200, justifyContent:'center'}}>
        {/* <img src={vivenco} style={{width: 600, height: 500, alignSelf: 'center', marginTop:-200,}}/> */}
        <img src={Logo} style={{width:200, height: 80, alignSelf: 'center'}}/>
        <h1 style={{ color:'white'}}>Tableros de Control</h1>
      </div>
      
      </section>
     <section className="info">
       <div className='info1'>
        {/* <p className='redText'>
          Sabe Ud. que solo en Argentina las empresas pierden oportunidades de ahorro por mas de USD 750 millones por no manejar correctamente sus catálogos de materiales?
        </p>
        
        <p>
          La Solucion de catalogación y manejo de maestros de <span>Vivemco</span> permite a las empresas generar información consistente y consolidada, accesible a cualquier usuario y funcional a cualquier ERP
        </p> */}
        
      </div>
      </section>
    </div>
  );
}

export default HomeScreen;
