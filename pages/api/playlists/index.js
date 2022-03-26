/* eslint-disable import/no-anonymous-default-export */
import PlayList from "../../../models/Playlist";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const playlists = await PlayList.find({});

        res.status(200).json({ success: true, data: playlists });
      } catch (err) {
        res.status(400).json({ success: false, message: "böyle bir veri yok" });
      }
      break;

    case "POST":
      try {
        const playlist = await PlayList.create(req.body);

        res.status(200).json({ success: true, data: playlist });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
};
