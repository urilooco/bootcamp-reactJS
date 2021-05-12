import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import foto from '../../../img/Pai.jpg';

function MyInformation(props){
    return(
        <div className="col-12 d-flex">
        <div className="col-4">
          <img src={foto} style={{
            width: '100%',
            // height: '70%',
            paddingTop: '50px',
            paddingLeft: '50px'
          }} />
        </div>
        <div className="col-8 container" style={{
            paddingTop: '100px',
            paddingLeft: '50px',
            paddingRight: '50px',
            fontSize: '20px'
          }} >
          <p style={{
            textAlign: 'justify'
          }}>Hi, my name is Rodrigo Uri Pérez Millán, I'm from Aguascalientes, México. I was born on October 27, 2001. And I'm 19 years old.</p>
          <p style={{
            textAlign: 'justify'
          }}>I am currently studying at UTA, the career is Information Technology and I am in the Arkus Nexus Boot Camp.</p>
          <p style={{
            textAlign: 'justify'
          }}>This is the first time that I use React JS, for me it is somewhat complicated, because I had never used it before and it's different from the rest of the frameworks. But I'd like to practice and learn more, I need to study:)</p>
        </div>
      </div>
    );
}

export default MyInformation;