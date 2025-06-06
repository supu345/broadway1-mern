import React from "react";
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className=" text-black py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold">
            <CountUp
              start={0}
              end={10}
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Tourist Guide</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold">
            <CountUp
              end={2}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Branch Office</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold">
            <CountUp
              end={5}
              separator=","
              suffix="+"
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p>Awards Achieve</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCounter;
