import React from 'react';
import logo from '../../assets/images/logo.png';

function Home() {
  return (
    <>
      <div>Hello ReactJS from HomePage</div>
      <div>
        <img
          src={logo}
          alt=''
          style={{ width: '200px', heigth: '200px', marginTop: '20px' }}
        />
      </div>
    </>
  );
}

export default Home;
