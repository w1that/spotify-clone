/* eslint-disable import/no-anonymous-default-export */
import Genre from "../../../models/Genre";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const id = req.query.id;

  try {
    const genre = await Genre.findById(id);

    res.status(200).json({ success: true, data: genre });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
