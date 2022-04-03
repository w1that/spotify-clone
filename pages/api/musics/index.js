/* eslint-disable import/no-anonymous-default-export */
import Music from "../../../models/Music";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const musics = await Music.find({});

        res.status(200).json({ success: true, data: musics });
      } catch (err) {
        res.status(400).json({ success: false, message: "böyle bir veri yok" });
      }
      break;
    case "POST":
      try {
        const music = await Music.create(req.body);

        res.status(200).json({ success: true, data: music });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
};
