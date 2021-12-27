import React from "react";

const AnimalsDetails = ({
  animals,
  title,
}: {
  animals: AnimalProps[];
  title: string;
}) => {
  return (
    <section id={title} className="pt-5">
      <h2 className="text-2xl text-secondary pb-5 text-center md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 ">
        {animals.map((animal, index) => (
          <div key={index} className="flex flex-col justify-end items-center relative">
            <img
              src={"/" + animal.type + "_" + animal.level + ".png"}
              className="mx-auto h-full w-auto "
            />

            <div className="flex flex-col items-center absolute -bottom-8">
              <span className="text-secondary text-base md:text-lg font-semibold">
                Level: {animal.level}
              </span>
              <span className="text-secondary text-base md:text-lg font-semibold">
                Power: {animal.power}
              </span>
              <span className="text-secondary text-base md:text-lg font-semibold">
                Price Change: {animal.priceChange}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export interface AnimalProps {
  type: string;
  level: number;
  power: string;
  priceChange: string;
}

export default AnimalsDetails;
