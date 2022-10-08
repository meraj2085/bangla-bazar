import React from "react";
import errorImg from "../../error-image.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img className="my-0 mx-auto w-3/5" src={errorImg} alt="" />
      <div className="flex justify-center">
        <Link to='/'><button className="btn">Back Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
