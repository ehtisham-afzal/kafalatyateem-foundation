import React from "react";

const CTA = () => {
  return (
    <div className="w-full h-fit p-4 bg-lime-50 my-4 flex flex-col justify-center items-center text-center rounded-lg relative">
      <img
        className="hidden md:block absolute bottom-1 right-4"
        src="/Illustratuion-giving-money.png"
        alt="illustration"
      />
      <h1 className="scroll-m-20 text-xl font-semibold tracking-tight w-fit py-2 text-wrap">
        The Prophet Muhammad (peace be upon him) said
      </h1>
      <p className=" text-wrap w-[500px] mt-2 border-l-2 pl-6 italic">
        “Whoever embraces an orphan of two Muslim parents by feeding him and
        giving him drink until he is independent of him, Paradise will certainly
        be necessary for him.”(Musnad Ahmad)
      </p>
    </div>
  );
};

export default CTA;
