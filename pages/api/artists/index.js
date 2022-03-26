/* eslint-disable import/no-anonymous-default-export */
import Artist from "../../../models/Artist";
import dbConnect from "../../../utils/dbConnection";

dbConnect();

export default async (req, res) => {

  const {method} = req;

  switch (method) {
    case 'GET':
      try {
        const artists = await Artist.find({});
    
        res.status(200).json({ success: true, data: artists });
      } catch (err) {
        res.status(400).json({ success: false, message: "böyle bir veri yok" });
      }
      break;

      case 'POST':
        try {
          const artist = await Artist.create(req.body);
      
          res.status(200).json({ success: true, data: artist });
        } catch (err) {
          res.status(400).json({ success: false });
        }
        break;
    
  
    default:
      break;
  }

  
};
