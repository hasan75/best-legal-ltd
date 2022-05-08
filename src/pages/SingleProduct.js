import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import singleServiceStyle from '../assets/css/singleService.module.css';
import useContexts from '../hooks/useContexts';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import SingleReviews from '../components/SingleReviews';
import { useLocation } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [reviews, setReviews] = useState([]);

  // const location = useLocation();

  const [rating, setRating] = useState(5);
  const { displayName, email, photoURL } = useContexts();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5001/products/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  useEffect(() => {
    fetch('http://localhost:5001/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);

  // const findOne = () => {
  //   const matchedReviewbyIdandEmail = reviews?.find(
  //     (r) => r.email === email && r.packageId === id
  //   );
  // }
  // findOne();
  // reviews?.find(
  //   (review) => review.email === email && review?.packageId === id
  // );
  const matchedReviewbyIdandEmail = reviews?.find(
    (review) => review.email === email && review?.packageId === id
  );

  const discoutPrice = Math.round(
    parseInt(service?.price) -
      parseInt(service?.price) * (parseInt(service?.discount) / 100)
  );

  // review section

  const onSubmit = (data) => {
    data.img = photoURL || 'https://i.ibb.co/5GzXkwq/user.png';
    data.email = email;
    data.rating = rating;
    data.packageId = id;

    Swal.fire({
      icon: 'warning',
      title: 'Do you want to rate?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('http://localhost:5001/addReview', {
          method: 'post',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire('Publish on review section!', '', 'success');
              window.location.reload();
            }
          });
      }
    });

    reset();
  };

  //for booking payment renewal date for 1 month
  let dateForPayment = new Date().toLocaleDateString();

  // for counting one month
  let currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() + 1);
  let subscriptionUpTo = currentDate.toLocaleDateString();

  return (
    <div className='container my-2 py-2'>
      <h1 className='py-3 text-center text-dark'>
        Tour Package Details of{' '}
        <span className='text-warning'>{service?.title}</span>
      </h1>
      <section className=' px-5 mx-3 my-3 rounded'>
        <div className='row g-1'>
          <div className='col-lg-8'>
            <div className='pb-2'>
              <img
                src={service?.img}
                alt='sundarban_img'
                className={`${singleServiceStyle.singlePicture} img-fluid`}
              />
            </div>
          </div>
          <div className='col-lg-4'>
            <div
              className={`${singleServiceStyle.extraInfo} h-100 text-start ms-3`}
            >
              <div className={`${singleServiceStyle.extraInfoText}`}>
                <h4 className='text-secondary fw-bold text-center'>
                  Key Infos
                </h4>
              </div>
              <div className='ps-3'>
                <span
                  className={`${singleServiceStyle.infoText} my-2 mx-2 text-secondary`}
                >
                  Coverage Area:{' '}
                  <span className='fw-bold'>{service?.destination}</span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  Category: <span className='fw-bold'>{service?.category}</span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  Estimated Cost:{' '}
                  <span className='fw-bold text-danger '>{service?.price}</span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  Discount Available:{' '}
                  <span className='fw-bold text-danger'>
                    {service?.discount} %
                  </span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  Subscription Period:{' '}
                  <span className='fw-bold text-success'>1 Month</span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  If you book today subscription ends on:{' '}
                  <span className='fw-bold text-warning bg-secondary p-1 rounded'>
                    {subscriptionUpTo}
                  </span>
                </span>
                <span
                  className={`${singleServiceStyle.infoText} my-2 text-secondary mx-2`}
                >
                  Discount Price:{' '}
                  <span className='fw-bold text-success'>{discoutPrice}</span>
                </span>
                <div>{/* <p>The date: {dateforPayment}</p> */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 my-4'>
            <div className={`${singleServiceStyle.tourDetails}`}>
              <h4 className='text-start text-success fw-bold'>
                Service Details
              </h4>
              <p className='fw-bold'>{service?.desc}</p>
              <h5 className='text-warning fw-bold my-2 pt-3'>
                Read the points below before you book your package
              </h5>
              <ul className='list-group my-2 py-3'>
                <li className='list-group-item'>
                  Every Service consists of some boundaries, so you have to be
                  flexible.
                </li>
                <li className='list-group-item'>
                  No Extra Costs like snacks, cigarette, extra food, extra guide
                  will be necessary.
                </li>
                <li className='list-group-item'>
                  Customers have to listen to the managers's call
                </li>
                <li className='list-group-item text-danger'>
                  No alcohol service is provided in the Service.
                </li>
                <li className='list-group-item'>
                  Your guide or quard won't be the person which will carry your
                  belongings or do house hold work.
                </li>
              </ul>
            </div>
          </div>
          <div className='col-md-6 my-4'>
            <div className={`${singleServiceStyle.tourDetails}`}>
              <h4 className='text-start text-success fw-bold'>
                Benefits with Best Force Ltd
              </h4>
              <p className='fw-bold'>
                In order to help explain the undeniable benefits of using a
                security service to book your future consern, I’ve partnered
                with Ataur Rahman Masum, owner of Best Force Ltd.
              </p>
              <ul className='list-group my-2 py-3'>
                <li className='list-group-item'>
                  The #1 benefit of using BFL when it comes to booking your
                  family security and other services is because security and
                  other services is our expertise.
                </li>
                <li className='list-group-item'>
                  We, the employees of Best Force Ltd have the greatest insight
                  knowledge.
                </li>
                <li className='list-group-item'>
                  that customers do not pay more for services because BEST FORCE
                  LTD is always with you.
                </li>
                <li className='list-group-item'>
                  You will be the first priority of your service's employees.
                  They will do anything with their limit to serve you.
                </li>
                <li className='list-group-item'>
                  The relationship you’ll form with your Best Force Ltd
                  employees, as well as their relationships with other
                  employees, are two of the benefits of using Best Force Ltd as
                  your security or other service partner.
                </li>
                <li className='list-group-item'>
                  The relationship you’ll form with your Best Force Ltd
                  employees, as well as their relationships with other
                  employees, are two of the benefits of using Best Force Ltd as
                  your security or other service partner.
                </li>
                <li className='list-group-item'>
                  Our employees will be the best assistance to you in your home
                  or office. They will assist you anywhere, anyhow!! That's the
                  main advantage if you get the service of Best Force Ltd.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className='my-3 text-center'>
        <Link to={`/placeorder/${id}`}>
          <button className='btn btn-outline-success'>Book Your Package</button>
        </Link>
      </div>
      {/* review show sections  */}
      <SingleReviews id={id} title={service.title}></SingleReviews>

      {/* add review sections  */}
      <section className='container my-4'>
        <h3 className='text-center text-capitalize fw-bold'>Give a feedback</h3>
        <Form onSubmit={handleSubmit(onSubmit)} className='w-100 form-main'>
          <div
            className='p-3 mx-auto  bg-white'
            style={{ borderRadius: '15px', maxWidth: '50rem' }}
          >
            <Row className='justify-content-center'>
              <Col md={6}>
                <Form.Group>
                  <Form.Label style={{ fontWeight: 'bold' }}>
                    Your Name
                  </Form.Label>
                  <Form.Control
                    type='text'
                    defaultValue={displayName}
                    {...register('name', { required: true })}
                    placeholder='Enter your name'
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <h6 className='fw-bold mt-1 mb-2'>Your Rating</h6>
                <Rating
                  className='text-warning fs-3'
                  emptySymbol='far fa-star '
                  fullSymbol='fas fa-star '
                  onChange={(rate) => setRating(rate)}
                  initialRating={rating}
                  fractions={2}
                />
                <h4 className='d-inline-block ms-2'>{rating}</h4>
              </Col>
            </Row>
            <Row className='my-2'>
              <Col>
                <Form.Group>
                  <Form.Label style={{ fontWeight: 'bold' }}>
                    Address
                  </Form.Label>
                  <Form.Control
                    type='text'
                    {...register('address', { required: true })}
                    placeholder='Enter your address'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className='my-2'>
              <Form.Group as={Col} md={12}>
                <Form.Label style={{ fontWeight: 'bold' }}>
                  Description
                </Form.Label>
                <Form.Control
                  style={{ height: '10rem' }}
                  type='text'
                  as='textarea'
                  {...register('description', { required: true })}
                  placeholder='Enter a description'
                />
              </Form.Group>
            </Row>
            <div className='mt-4'>
              {matchedReviewbyIdandEmail ? (
                <span className='fw-bold text-danger'>
                  You have already given a review about this package
                </span>
              ) : (
                <button
                  type='submit'
                  className='btn btn-primary'
                  style={{ padding: '.6rem 2rem' }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default SingleProduct;
