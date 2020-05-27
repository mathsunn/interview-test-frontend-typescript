import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { email, password },
    method,
  } = req;

  if ("POST" === method) {
    if (email === "user@domain.tld" && password === "123456789") {
      res.status(200).json({ valid: true });
    } else {
      res.status(400).json({ valid: false });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
};
