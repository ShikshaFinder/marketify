import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import React from 'react'

function Report({name,about,why,price,image}:{name:string,about:string,why:string,price:any,image:any}) {
     const Router = useRouter();
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt="Marketing Platform"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{name}</Heading>

            <Text py="2">{about}</Text>
            <Text py="2">{why}</Text>

            <Text py="2">
              <b>
                <h4>{price} ₹</h4>
              </b>
            </Text>
          </CardBody>

          <CardFooter>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                Router.push("/success");
              }}
            >
              Place Order
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default Report