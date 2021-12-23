import React from "react";

const About = () => {
  return (
    <section id="about" className="p-4 text-secondary">
      <h2 className="text-2xl pb-2">About</h2>
      <p className="text-lg">
        Each <b className="text-main">CryptoTimeframe</b> card represents a price time frame of a specific
        cryptocurrency. Each time frame is unique and can’t be overlap by
        another one. <br/>There are <b className="text-main">bullish and bearish</b> cards depending if the
        difference between the start-price and end-price is positive or
        negative. <br/>Each card will have a different type of a bull or bear
        depending on the <b className="text-main">price change percentage</b> (percentage details in the next
        section). <br/>Each card have <b className="text-main">energy</b>, this energy is calculated taking into
        account the Market Cap change, the number of days and the power of the
        Bull/Bear. <br/>The energy formula is: <b className="text-main">( Market Cap change / 1,000,000 * Days
        * Bull/Bear Power )</b>
      </p>
    </section>
  );
};

export default About;
