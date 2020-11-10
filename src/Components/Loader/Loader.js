import React from "react";
import Loader from "react-loader-spinner";

const LoaderSpinner = () => {
  return (
    <div>
      <Loader type="TailSpin" color="black" height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
