
import { getAllShows } from '../../../utils/getShows';

export default async function shows(req, res) {
  res.json(await getAllShows());
}