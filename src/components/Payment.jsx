import React, { useEffect, useState } from "react";
const Payment = (props) => {
  return (
    <div className="paymentPage">
      <p className='charged'>Charging {props.total} </p>
      <div className="creditCard">
        <img src="https://paytechlaw.com/wp-content/uploads/190409_Kreditkartenzahlung_chuhastock_de_eng.png" alt=''/>
      </div>
    </div>
  );
};

export default Payment;
