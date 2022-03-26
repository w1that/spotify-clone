/* eslint-disable import/no-anonymous-default-export */
import Album from "../../../models/Album";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const albums = await Album.find({});

        res.status(200).json({ success: true, data: albums });
      } catch (err) {
        res.status(400).json({ success: false, message: "böyle bir veri yok" });
      }
      break;
    case "POST":
      try {
        const album = await Album.create(req.body);

        res.status(200).json({ success: true, data: album });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      break;
  }
};
