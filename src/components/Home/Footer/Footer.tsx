import React from 'react'
import ReachOut from '../ReachOut/ReachOut';

const Footer = () => {
  return (
    <>
      <ReachOut />
      <footer>
        <hr className="border-[1px] border-red-500 " />
        <div className="text-center py-5">
          © 2024 New Eco Cleaning Services. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer
