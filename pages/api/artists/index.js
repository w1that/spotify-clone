/* eslint-disable import/no-anonymous-default-export */
import Artist from "../../../models/Arist";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  try {
    const artists = await Artist.find({});

    res.status(200).json({ success: true, data: artists });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
