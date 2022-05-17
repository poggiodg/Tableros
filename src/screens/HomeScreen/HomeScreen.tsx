import React from 'react';
import './HomeScreen.css';
// import vivenco from '../../assets/vivenco.png'
// import scroll from '../../assets/scroll.gif'
// import flechaInformativa from '../../assets/flechaInformativa.png'
// import comercial from '../../assets/comercial.png'

function HomeScreen() {
  return (
    <div>
      <div className='home'>
          <h1>Esto es el Home!</h1>
      </div>
      {/* <section  className='banner' style={{flexDirection: 'column', alignItems: 'center'}}>
      <div style={{flexDirection: 'column', alignItems: 'center', marginBottom: 200}}>
        <img src={vivenco} style={{width: 600, height: 500, alignSelf: 'center', marginTop:-200,}}/>
        <h3 style={{marginTop:-150, color:'white', marginLeft: 60}}>Standard Catalogs.</h3>
      </div>
      
      </section>
     <section className="info">
       <div className='info1'>
        <p className='redText'>
          Sabe Ud. que solo en Argentina las empresas pierden oportunidades de ahorro por mas de USD 750 millones por no manejar correctamente sus catálogos de materiales?
        </p>
        <img src={flechaInformativa} style={{ alignSelf: 'center'}}/>
        <p>
          La Solucion de catalogación y manejo de maestros de <span>Vivemco</span> permite a las empresas generar información consistente y consolidada, accesible a cualquier usuario y funcional a cualquier ERP
        </p>
        <img src={comercial} style={{width: 600, height: 500, alignSelf: 'center'}}/>
      </div>
      </section> */}
    </div>
  );
}

export default HomeScreen;
