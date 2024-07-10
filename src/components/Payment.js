import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles/payment.css";

const Payment = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { selectedSeats, movie } = state;
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        setPaymentSuccess(true);
    };

    const handleBackToHome = () => {
        navigate("/home");
    };

    return (
        <div className="container">
          

            {paymentSuccess ? (
                <div className="success-message">
                  <center><p><h1>Congratulations..!! <br/>Your payment has been successfully processed.</h1></p>
                    <p><h2>Your ticket has been successfully booked. <br/>Thank You for Your Booking!</h2></p> </center>
                    <button onClick={handleBackToHome} className="back-home-button">Back To Home Page</button>
                </div>
            ) : (
                <div>
                   
                     <h1><u>Checkout & Payment GateWay</u></h1><br/> <br/>
                     <h2> <u>Checkout Form:</u></h2> 
            <form onSubmit={handlePayment}> 
                    <div className="form-group">
                      
                        <span>First Name:</span>
                        <input
                          type="text"
                          id="firstName"
                          placeholder="first Name "
                          required
                        />
                        
                      <div className="form-group">
                        <label>
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder="last name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="you@gmail.com"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>
                          Zip
                        </label>
                        <input
                          type="tel"
                          id="zip"
                          placeholder="700xxx"
                          maxLength="6"
                          required
                        />
                      </div>
                    </div> <br /><br />
                    <h2> <u>Total Ammount & Seat Details:</u> </h2>
                    <p><center>Selected Seats: {selectedSeats.join(", ")}</center></p>
                    <p><center>Total Price: ₹{selectedSeats.length * movie.price}</center></p><br /><br /><br />
                    <h2> <u>Continue Payment Process:</u> </h2><br /><br/><br/>
                    <h2> <u>Enter Card Details: </u></h2> 
                  
                  <div className="form-group">
                    <label>Nmae on Card:</label>
                    <input type="text" placeholder="Full name as displayed on card" required />
                </div>    
                <div className="form-group">
                    <label>Credit/Debit Card Number:</label>
                    <input type="tel" placeholder="1234 1234 1234 1234" maxLength="16" required />
                </div>
                <div className="form-group">
                    <label>Expiry Date:</label>
                    <input type="text" placeholder="Month / Year" required />
                </div>
                <div className="form-group">
                    <label>CVV:</label>
                    <input type="tel" placeholder="000" maxLength="3"required />
                </div> 
                    <button type="submit">Pay Now</button>
            </form>
                </div>
            )}  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div> 
    );
};

export default Payment;
