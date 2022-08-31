import React from 'react';
import img1 from '../../assets/images/hygienne.png';

const myComponentStyle = {
  backgroundImage: `url(${img1})`,
};

function Home() {
  return (
    <div id="home" className="hero min-h-screen" style={myComponentStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">MADEPA</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button type="button" className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
