/* eslint-disable import/no-anonymous-default-export */
import Artist from "../../../models/Artist";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const id = req.query.id;

  try {
    const artist = await Artist.findById(id);

    res.status(200).json({ success: true, data: artist });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
