import React from "react";
import type { NextPage } from "next";
import About from "../components/About";
import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import AnimalsDetails, { AnimalProps } from "../components/AnimalsDetails";
import Value from "../components/Value";


const Home: NextPage = () => {

  return (
    <div className="flex flex-col space-y-5">
      <Nav />
      <Welcome />
      <About />
      <AnimalsDetails title={'Bulls'} animals={require('../data/bulls.json') as AnimalProps[]} />
      <AnimalsDetails title={'Bears'} animals={require('../data/bears.json') as AnimalProps[]} />
      <Value />
    </div>
  );
};

export default Home;
