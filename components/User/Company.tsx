import React, {useEffect, useState} from 'react';
import axios from "axios";
import Link from "next/link";



interface Company {
  name: string;
  id?: number;
  address: string;
  postalCode: string;
  city: string;
}

const Company: React.FC = () => {
  const [company, setCompany] = useState<Company>(null);

  useEffect(() => {
    async function fetchCompany() {
      const {data} = await axios.get("/api/user/company");
      setCompany(data);
    }

    fetchCompany();
  }, []);

  return (
    <>
      {company && <div>
        <p className="company">{company.name} ({company.id})</p>
        <p className="address">{company.address}</p>
        <p className="address">{company.postalCode} {company.city}</p>

        <div className="actions">
          <Link href="/">Voir mes informations</Link>
        </div>
      </div>
      }
    </>
  )
};


export default Company;
