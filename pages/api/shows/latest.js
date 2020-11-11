
import { getAllShows } from '../../../utils/getShows';

export default async function latest(req, res) {

  const shows = await getAllShows();
  const show = shows[0];
  if (show) {
    res.json(show);
    return;
  }
  res.status(404).json({
    message: `Sorry not found. Out of all the ${shows.length} shows, we didn't find this one.`,
  });
}