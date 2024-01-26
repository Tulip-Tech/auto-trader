// pages/api/stock.js

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.autotrader.co.uk/json/dealers/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10038946&sort=price-asc"
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}
