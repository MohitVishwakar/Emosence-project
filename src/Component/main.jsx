import React from "react";

const Main = () => {
  return (
    <>
<div className="container font-roboto">
  <div className="container flex justify-around items-center m-14">
    <div className="">
      <h1 className="text-3xl text-center">Let's check your emotions</h1>
      <div className="">
        <h3>Here's accuracy level is unbeatable</h3>
      </div>
    </div>
    <div className="boxs bg-slate-100 w-72 h-96 flex flex-col items-center justify-center border-2 border-solid border-gray-700 rounded-lg shadow-lg hover:-translate-y-2 transition-all duration-300">
      <p className="tracking-wider">Face Emotions</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-52 h-52">
        <path strokeLinecap="inherit" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632" />
      </svg>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded">
          Start
        </button>
      </div>
    </div>
    <div className="boxs bg-slate-100 w-72 h-96 flex flex-col items-center justify-center border-2 border-solid border-gray-700 rounded-lg shadow-lg hover:-translate-y-2 transition-all duration-300">
      <p className="tracking-wider">Voice Emotions</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-52 h-52">
        <path strokeLinecap="inherit" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-11 rounded">
          Start
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  );
  
  }
export default Main;
