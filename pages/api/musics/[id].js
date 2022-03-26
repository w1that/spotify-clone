/* eslint-disable import/no-anonymous-default-export */
import Music from "../../../models/Music";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const id = req.query.id;

  try {
    const music = await Music.findById(id);

    res.status(200).json({ success: true, data: music });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
