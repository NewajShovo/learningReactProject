import React from "react";

function Hero({ heroName }) {
  console.log(heroName);
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }

  //   if (heroName === "Joker") {
  //     console.log("Heroo");
  //   }

  return <div>{heroName}</div>;
}

export default Hero;
