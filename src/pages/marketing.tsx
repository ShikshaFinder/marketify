import React from 'react'
import Card from "../components/card"

function marketing() {
  return (
    <>
      <Card
        name="LinkedIn"
        about="Placing marketing on LinkedIn helps reach a highly professional and engaged audience."
        why="Your Target Audience are highly professional and educated so marketing here can benefite you 🚀🚀"
        price={"2000"}
        image={
          "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <br />
      <Card
        name="twitter"
        about="Placing marketing on Twitter helps reach a highly professional and engaged audience."
        why="Your Target Audience are highly professional and educated so marketing here can benefite you"
        price={"12,000"}
        image={
          "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </>
  );
}

export default marketing