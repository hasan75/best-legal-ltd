import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../components/Product.js';
import Slider from '../components/Slider.js';
import useProducts from '../hooks/useProducts.js';
import useStoryBlogs from '../hooks/useStoryBlogs.js';
import './../assets/css/home.css';
import collection1 from './../assets/images/collection/c1.jpg';
import collection2 from './../assets/images/collection/c2.png';
import collection3 from './../assets/images/collection/c3.png';
import collection4 from './../assets/images/collection/c4.jpg';
import collection5 from './../assets/images/collection/c5.jpg';
import collection6 from './../assets/images/collection/c6.png';
import collection7 from './../assets/images/collection/c7.jpg';
import collection8 from './../assets/images/collection/c8.jpg';
import Bounce from 'react-reveal/Bounce';
import Testimonials from '../components/Testimonials.js';
import VideoCOmponent from '../components/VideoCOmponent/VideoCOmponent.js';
import CustomBlog from '../components/CustomBlog/CustomBlog.js';
import SingleStory from '../components/SingleStory/SingleStory.js';
const Home = () => {
  const products = useProducts();
  const blogs = useStoryBlogs();
  return (
    <div>
      <Slider />
      <Container className='collections my-5 mx-auto'>
        <Bounce bottom cascade>
          <h2 className='text-center feature'>
            We have successfully managed security services and other services
            for the companies and Institutions.
          </h2>
        </Bounce>
        <p
          style={{ maxWidth: '650px' }}
          className='text-center mb-2 mx-auto mt-3'
        >
          <Bounce>
            A huge number of companies and educational institutions are our
            clients. We manages office security for these renowned
            organizations.
          </Bounce>
        </p>
        <Row className='mx-0'>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img'>
              <img className='img-fluid ms-0 ps-0' src={collection1} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection2} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection3} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection4} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection5} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection6} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection7} alt='' />
            </div>
          </Col>
          <Col className='my-2 ms-0' xs={12} md={6} lg={3}>
            <div className='img img-fluid'>
              <img className='img-fluid ms-0 ps-0' src={collection8} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Bounce bottom cascade>
          <h2 className='text-center feature'>MOST POPULAR Packages</h2>
          <p style={{ maxWidth: '650px' }} className='text-center mx-auto mt-3'>
            {' '}
            A great qualitifull security packages of all kinds of of ours from
            different zillas of Bangladesh to serve you and your family.
          </p>
        </Bounce>
        {!products.length ? (
          <div className='text-center my-5 private-spinner py-5'>
            <Spinner variant='danger' animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {products?.slice(2, 8)?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
        <div className='text-center'>
          <Link to='/products'>
            <button className='btn btn-primary mb-5 mt-3'>
              Explore All Packages
            </button>
          </Link>
        </div>
      </Container>
      <section classsName='videoContent my-2'>
        <VideoCOmponent></VideoCOmponent>
      </section>
      <Container mt={3}>
        <Bounce bottom cascade>
          <h2 className='text-center feature'>Our's Story</h2>
          <p style={{ maxWidth: '650px' }} className='text-center mx-auto mt-3'>
            {' '}
            A great memory shouldn't be forgotten. Some of the finest writings
            are here to entertain your soul.
          </p>
        </Bounce>
        {!blogs.length ? (
          <div className='text-center my-5 private-spinner py-5'>
            <Spinner variant='danger' animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Row>
            {blogs?.slice(0, 2)?.map((singledata) => (
              <SingleStory key={singledata._id} singledata={singledata} />
            ))}
          </Row>
        )}
        <div className='text-center'>
          <Link to='/blogs'>
            <button className='btn btn-primary mb-5 mt-3'>
              Explore All Blogs
            </button>
          </Link>
        </div>
      </Container>
      <Testimonials />
    </div>
  );
};

export default Home;
