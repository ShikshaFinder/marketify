import { Heading } from "@chakra-ui/react";
import React from 'react'

function success() {
  return (
    <>
      <p className="container">
        <Heading as="h1" size="1xl" noOfLines={1}>
          Congrates your order
           is placed 🥳🥳
        </Heading>
      </p>
    </>
  );
}

export default success