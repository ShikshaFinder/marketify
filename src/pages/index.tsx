"use client";
import { useRouter } from 'next/router';

import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  useToast,
  CardBody,
  Card,
  Stack,
} from "@chakra-ui/react";


function vote() {
  const toast = useToast();
  const router = useRouter();
function changeRout() {
  router.push("/marketing")
}
  return (
    <>
      <Stack spacing="4">
        <Card variant="outline">
          <CardBody>
            <Heading size="md" fontSize="26px">
              Let's create a business plan for your venture 😎{" "}
            </Heading>
            <br />
            <FormControl isRequired>
              <FormLabel>Category of your Business </FormLabel>
              <Input placeholder="Category of your Business " />
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel> What your business does exactly?</FormLabel>
              <Input placeholder="I Have a bakery shop/statup...." />
            </FormControl>
            <br />{" "}
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input placeholder="Write the city ,state and locality(if possible write average income)" />
            </FormControl>
            <br />{" "}
            <FormControl isRequired>
              <FormLabel>Type Of Consumeres</FormLabel>
              <Input placeholder="adultes/couples/student /senior citizens" />
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel>Budget</FormLabel>
              <Input placeholder="INR" />
            </FormControl>
            <br />
            <FormControl isRequired>
              <FormLabel>Specific Needs</FormLabel>
              <Input placeholder="Customer who are looking for XYZ product/Person who have credit card" />
            </FormControl>
            <br />
            <Button
              colorScheme="teal"
              size="md"
              onClick={() => {
                // Create an example promise that resolves in 5s
                const examplePromise = new Promise((resolve, reject) => {
                  setTimeout(() => resolve(200), 5000);
                });

                // Will display the loading toast until the promise is either resolved
                // or rejected.
                toast.promise(examplePromise, {
                  success: {
                    title: "Detail Submitted",
                    description: "Let's Dive",
                  },
                  error: {
                    title: "Promise rejected",
                    description: "Something wrong",
                  },
                  loading: {
                    title: "Creating a Marketing plan for you 📈",
                    description: "Please wait",
                  },
                });
              }}
            >
              <p onClick={()=>{
               setTimeout(changeRout,5000);
              }}> Submit</p>
            </Button>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
}
import React from "react";

export default vote;
