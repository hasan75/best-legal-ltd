import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/css/slider.css';
import Slider1 from '../assets/images/04/security-guard-1.jpg';
import Slider2 from '../assets/images/04/2.jpg';
import Slider3 from '../assets/images/04/drill-gajipur.jpg';
import Slider4 from '../assets/images/04/Engineering-Outsourching.jpeg';

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100 imageSlider'
            src={Slider1}
            alt='Slider Img'
          />
          <Carousel.Caption className=' mb-5 rounded sliderCaption'>
            <h3>Social Security Service</h3>
            <p>
              Best Force Ltd often security services in social areas. It is
              basically a premium package where society of any population can
              acquire the package. The packages of ours are not negotiable. We
              prefer quality services to everyone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100 imageSlider'
            src={Slider2}
            alt='Second slide'
          />
          <Carousel.Caption className=' mb-5 rounded sliderCaption'>
            <h3>Best Security Management Service</h3>
            <p>
              Best Force Ltd has one of the finest men and women to secure your
              properties. It is basically a premium package where society of any
              population can acquire the package. The packages of ours are not
              negotiable. We prefer quality services to everyone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100 imageSlider'
            src={Slider3}
            alt='Third slide'
          />
          <Carousel.Caption className=' mb-5 rounded sliderCaption'>
            <h3>Best Training to the employees</h3>
            <p>
              Best Force Ltd has giving the employees proper trainings. They are
              trained to secure you and your belongings very well. The packages
              of ours are not negotiable. We prefer quality services to
              everyone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block w-100 imageSlider'
            src={Slider4}
            alt='Fourth slide'
          />
          <Carousel.Caption className=' mb-5 rounded sliderCaption'>
            <h3>The Quility Men</h3>
            <p>
              In Best Force Ltd, you will get the quality service you want to
              have. They are trained to secure you and your belongings very
              well. The packages of ours are not negotiable. We prefer quality
              services to everyone.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
