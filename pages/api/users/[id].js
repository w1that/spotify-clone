/* eslint-disable import/no-anonymous-default-export */
import User from "../../../models/User";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {
  const id = req.query.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: "böyle bir veri yok" });
  }
};
