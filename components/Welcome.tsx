import React from "react";

const Welcome = () => {
  return (
    <main id="welcome" className="md:flex md:justify-between">
      <section className="flex flex-1 flex-col justify-center items:center md:items-start md:items:start md:text-left text-center text-secondary space-y-5">
        <h1 className="xl:text-6xl md:text-5xl text-2xl">Welcome to CryptoTimeFrame</h1>
        <p className="md:text-xl text-base">
          Be the <b className="text-main">ONLY</b> owner of a price time frame
          of your favorite cryptocurrency
        </p>
        <a href="https://opensea.io/collection/crypto-timeframe" className="p-4 md:self-start self-center bg-main text-sm md:text-base text-secondary rounded-full ">
          View on OpenSea
        </a>
      </section>
      <section className="flex flex-1 flex-col md:flex-row justify-center md:p-0 p-4 items-center">
        <div className="flex-1 h-full  w-auto ">
          <img src={"BEAR_CARD.png"} />
        </div>
        <div className="flex-1 h-full  w-auto">
          <img src={"BULL_CARD.png"} />
        </div>
      </section>
    </main>
  );
};

export default Welcome;
