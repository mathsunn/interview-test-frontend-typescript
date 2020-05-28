import React, {useEffect, useState} from 'react';
import axios from "axios";
import moment, {Moment} from "moment";
import Link from "next/link";

interface Receipt {
  label: string;
  date: Moment,
}

const Receipt: React.FC = () => {
  const [receipt, setReceipt] = useState<Receipt>(null);

  useEffect(() => {
    async function fetchReceipt() {
      const data = await axios.get("/api/user/receipt");
      const receipt = {...data.data};
      receipt.date = moment(receipt.date);
      setReceipt(receipt);
    }

    fetchReceipt();
  }, []);

  return (
    <>
      {receipt && <div>
        <div className="receipt">
          <p className="date">{receipt.date.locale("fr").format('MMMM YYYY')}</p>
          <p>{receipt.label}</p>
        </div>

        <div className="actions">
          <Link href="/">Afficher toutes mes quittances</Link>
      </div>
      </div>
      }
    </>
  )
};


export default Receipt;
