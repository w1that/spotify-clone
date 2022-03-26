/* eslint-disable import/no-anonymous-default-export */
import Music from "../../../models/Music";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  try {
    const musics = await Music.find({});

    res.status(200).json({ success: true, data: musics });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
