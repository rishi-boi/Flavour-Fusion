import React from "react";
import LoadImg from '../constants/loader.gif';

const Loader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center w-full h-screen">
        <img src={LoadImg} width='40%' alt="" />
    </div>
  );
};

export default Loader;
