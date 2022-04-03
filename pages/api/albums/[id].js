/* eslint-disable import/no-anonymous-default-export */
import Album from "../../../models/Album";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  
  const id = req.query.id;
  try {
    const album = await Album.findById(id);
    res.status(200).json({ success: true, data: album });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
