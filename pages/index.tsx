import React from "react";
import type { NextPage } from "next";
import About from "../components/About";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import AnimalsDetails, { AnimalProps } from "../components/AnimalsDetails";
import Value from "../components/Value";
import Roadmap from "../components/Roadmap";


const Home: NextPage = () => {

  return (
    <div className="flex flex-col space-y-10 px-4 md:py-10 py-5">
      <Nav />
      <Welcome />
      <About />
      <AnimalsDetails title={'Bulls'} animals={require('../data/bulls.json') as AnimalProps[]} />
      <AnimalsDetails title={'Bears'} animals={require('../data/bears.json') as AnimalProps[]} />
      <Value />
      <Roadmap />
    </div>
  );
};

export default Home;
