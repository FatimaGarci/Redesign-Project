import React from "react";
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import classes from './login.module.css';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


const FormPage = () => {
  return (
      <div className={classes.All}>
        <div className={classes.signup}>
          <MDBContainer className={classes.container}>
            <MDBRow>
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="mx-4">
                    <div className="text-center">
                      <h3 className="dark-grey-text mb-5">
                        <strong>Sign in</strong>
                      </h3>
                    </div>
                    <MDBInput
                      label="Your email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      label="Your password"
                      group
                      type="password"
                      validate
                      containerClass="mb-0"
                    />

                    <div className="text-center mb-3">
                      <button
                      >
                        Sign in
                </button>
                    </div>


                  </MDBCardBody>
                  <div className="mx-5 pt-3 mb-1">
                    <p className="font-small grey-text d-flex justify-content-end">
                      Not a member?
                <Link to="/signup">Sign up!</Link>
                    </p>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>



          <div className={classes.Icon}>
            <i class="fas fa-user-edit fa-3x"></i>
            <p className={classes.caption}>960,593,807 <span>
              edits</span></p>

            <i class="fas fa-newspaper fa-3x"></i>
            <p className={classes.caption}>6,112,410 <span>
              articles</span></p>

            <i class="fas fa-users fa-3x"></i>
            <p className={classes.caption}>138,662 <span>
              recent contributors</span></p>

          </div>
        </div >
        <section className={classes.Footer}>
        <Footer />
        </section>
      </div>

  );
};

export default FormPage;