
import {  getShows } from '../../../utils/ReadShowFiles';

export default async function showByNumber(req, res) {

  const show = await getShows(req.query.number);
  if (show) {
    res.json(show);
    return;
  }
  res
    .status(404)
    .json({ message: `Sorry, we could not find show #${req.query.number}` });
}