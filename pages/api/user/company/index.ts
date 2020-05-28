import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if ("GET" === method) {
    res.status(200).json({
      name: "company_company",
      id: 89391277416390,
      address: "341 rue de la mer",
      postalCode: "13100",
      city: "Aix-en-provence",
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
