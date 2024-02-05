// pages/api/reviews.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const googlePlacesAPIKey = 'AIzaSyAcPmiTIAfl-BYDQuc2sx6hZhMiH6PTPo8'; // Ensure this is set in your .env.local file
const placeId = 'ChIJk8ugctcPd0gRU5Wdy5_U5Yk'; // Replace with your actual Place ID

async function getReviews(req: NextApiRequest, res: NextApiResponse) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${googlePlacesAPIKey}&fields=reviews`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error_message) {
      return res.status(500).json({ message: data.error_message });
    }

    const reviews = data.result.reviews || [];
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
}

export default getReviews;
