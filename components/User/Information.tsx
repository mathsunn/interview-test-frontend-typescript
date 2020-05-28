import React, {useEffect, useState} from 'react';
import axios from "axios";

const Information: React.FC = () => {
  const [firstName, setFirstName] = useState<string>(null);

  useEffect(() => {
    async function fetchInformation() {
      const {data} = await axios.get("/api/user/information");
      setFirstName(data.firstName);
    }

    fetchInformation();
  }, []);

  return (
    <>
      <h1>
        Bienvenue sur votre espace personnel {firstName}
      </h1>
      <style jsx>{`
      h1{
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
      }
    `}</style>
    </>
  )
};


export default Information;
