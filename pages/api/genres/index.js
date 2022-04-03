/* eslint-disable import/no-anonymous-default-export */
import Genre from "../../../models/Genre";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const genres = await Genre.find({});

        res.status(200).json({ success: true, data: genres });
      } catch (err) {
        res.status(400).json({ success: false, message: "böyle bir veri yok" });
      }
      break;
    case "POST":
      try {
        const genre = await Genre.create(req.body);

        res.status(200).json({ success: true, data: genre });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
};
