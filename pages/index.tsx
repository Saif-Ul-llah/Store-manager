import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className=" ">
      <div className="container h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to Store Manager
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
