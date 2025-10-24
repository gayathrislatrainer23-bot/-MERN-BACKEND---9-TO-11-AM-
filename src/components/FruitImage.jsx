import React, { useState } from "react";



const FruitImage = React.memo(({ getFruit }) => {
  console.log("Child rendered");
  const image = getFruit();
  return (
    <div>
      {image ? (
        <img src={image} alt="fruit" width="100" />
      ) : (
        <p>No fruit in library</p>
      )}
    </div>
  );
});

export default FruitImage
