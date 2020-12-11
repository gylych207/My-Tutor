import React, { useEffect, useState } from "react";
const Payment = (props) => {
  return (
    <div className="paymentPage">
      <p className='charged'>Charging {props.total} </p>
      <div class="container">
  <div class="row">
    <div class="col-md-12">
      <span className='card formCredit'>Credit Card Form</span>
    </div>
  </div>
  <br />
   <div class="row">
    <div class="col-xs-4">
     <span className='card'> Card Holder Name</span> <input type="text" class="sinif" id="kartSahibi"  maxlength="25" size="25" placeholder="Your Name"/>
    </div> 
  </div>
  <br />
  <div class="row">
      <div class="col-xs-1">
        <span className='card'>Card Number:</span> <input type="text" class="sinif" id="a"  maxlength="4" size="4" placeholder="* * * *"/>
        </div> -- 
      <div class="col-xs-1">
        <input type="text" class="sinif" id="b"  maxlength="4" size="4" placeholder="* * * *"/>
        </div> -- 
      <div class="col-xs-1">
        <input type="text" class="sinif" id="c"  maxlength="4" size="4" placeholder="* * * *"/>
        </div> -- 
      <div class="col-xs-1">
        <input type="text" class="sinif" id="d"  maxlength="4" size="4" placeholder="* * * *"/>
        </div>
      <div class="col-xs-9">
      </div>    
  </div>
  <br />
  <div class="row">
    <div class="col-md-2">
      <span className='card'>CVV:</span> <input type="text" class="sinif" id="cvv"  maxlength="3" size="3" placeholder="CVV"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <span className='card'>Kart NO: </span><span id="sonuc"></span>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
    </div>
  </div>
</div>
    </div>
  );
};

export default Payment;
