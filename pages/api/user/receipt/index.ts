import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if ("GET" === method) {
    res.status(200).json({
      label: "RC PRO Raincoat",
      date: "2012-04-23T18:25:43.511Z",
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
