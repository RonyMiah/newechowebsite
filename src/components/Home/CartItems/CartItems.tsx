import React from "react";

const CartItems = () => {
  return (
    <div className="container flex gap-7 justify-center items-center -mt-20 relative  ">
      <div className="rounded-lg w-[400px] md:flex-col h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4">
        <div>Logo</div>
        <div>
          <h3>We Listen</h3>
          <p>
            AUCS prioritize listening to our clients' cleaning needs to deliver
            tailored solutions.
          </p>
        </div>
      </div>
      <div className="rounded-lg w-[400px] h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4">
        <div>Logo</div>
        <div>
          <h3>We Listen</h3>
          <p>
            AUCS prioritize listening to our clients' cleaning needs to deliver
            tailored solutions.
          </p>
        </div>
      </div>
      <div className="rounded-lg w-[400px] h-[200px] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] flex p-4 gap-4">
        <div>Logo</div>
        <div>
          <h3>We Listen</h3>
          <p>
            AUCS prioritize listening to our clients' cleaning needs to deliver
            tailored solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
