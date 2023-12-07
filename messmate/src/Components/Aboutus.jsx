import React from "react";

function Aboutus() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-32 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 tracking-widest">
            OUR TEAM
          </h1>
        </div>
        <div className="flex flex-wrap mx-6">
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium  text-lg text-gray-900">
                  Himanshu Gautam
                </h2>
                <h3 className="text-gray-500 mb-3">Project Manager</h3>
                <p className="mb-4">21UCS240</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg  text-gray-900">
                  Aditya Sonkusare
                </h2>
                <h3 className="text-gray-500 mb-3">Team Member2</h3>
                <p className="mb-4">21UCS011</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Utkarsh Gupta
                </h2>
                <h3 className="text-gray-500 mb-3">Team Member3 </h3>
                <p className="mb-4">21UCS222</p>
             </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Vaibhav Goyal
                </h2>
                <h3 className="text-gray-500 mb-3">Team Member4 </h3>
                <p className="mb-4">21UCS223</p>
               </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Sanyam Patwari
                </h2>
                <h3 className="text-gray-500 mb-3"> Team Member5</h3>
                <p className="mb-4">21UCS241</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
