import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

interface Data extends NextApiRequest {
  body: { email: string; name: string; message: string };
}

const MONGO_URL = process.env.NEXT_PUBLIC_MONGODB

const handler = async (req: Data, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(MONGO_URL!);
    } catch (error) {
      res.status(500).json({ message: "could not connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Succesfully stored message!" });
  }
};

export default handler;
