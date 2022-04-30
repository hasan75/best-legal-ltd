import React from 'react';
import ReactPlayer from 'react-player';
import './VideoCOmponent.css';

const VideoCOmponent = () => {
  return (
    <div className='d-lg-flex video-HTT'>
      <div className='container'>
        <ReactPlayer
          width='100%'
          controls='true'
          url='https://www.youtube.com/watch?v=TRNSVgGedHw'
        />
      </div>
      <div className='container my-auto'>
        <h2 className='text-center title'> Be Safe With Best Force Ltd</h2>
        <div className='container pt-3 subtitle text-center'>
          <h4>
            Best Force Ltd is one of the finest and oldest security management
            company in Bangladesh. We offer our customers maximum security and
            maximum amount of comfort. We have several managers who will try
            their best to secure you very strongly. <br />
            <span className='text-danger fw-bold'>
              We Don't Encourage to use chemical weapons. Say No to Chemical
              Weapons.
            </span>{' '}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default VideoCOmponent;
