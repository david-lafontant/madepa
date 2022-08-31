import React from 'react';
import image1 from '../../assets/images/hygienne.png';

function Projects() {
  return (
    <section>
      <h2 className="text-3xl text-center">Projects</h2>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image1} alt="project 1" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Project 1</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image1} alt="project 2" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Project 2</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image1} alt="project 3" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Project 3</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image1} alt="project 4" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Project 4</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
