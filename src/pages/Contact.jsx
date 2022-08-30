import React from 'react'

function Contact() {
  return (
    // <div className="flex flex-col md:flex-row">
    //     <div className="bg-orange-500 w-80 h-80">Left</div>
    //     <div className="bg-green-500 w-80 h-80">Right</div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <div className="bg-orange-500 w-80 px-4 py-3 h-80">Left</div>
      <div className="bg-green-500 w-80 px-4 py-3 h-80">Right</div>
      <div className="bg-orange-500 px-4 py-3 w-80 h-80">Left</div>
      <div className="bg-green-500 px-4 py-3 w-80 h-80">Right</div>
    </div>
  );
}

export default Contact
