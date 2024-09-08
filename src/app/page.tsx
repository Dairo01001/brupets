
import { prisma } from "../lib";
import React from "react";


const Home: React.FC = async () => {
  const users = await prisma.users.findMany({
    where: {
      status: true,
    },
    select: {
      name: true,
      email: true,
      role: {
        select: {
          name: true,
        }
      }
    }
  });

  return (
    <div>
      <h1>Hello World</h1>
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default Home;
