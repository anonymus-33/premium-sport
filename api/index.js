export default async function handler(req, res) {
  try {
    const response = await fetch('https://api.openf1.org/v1/drivers?session_key=9158');
    if (!response.ok) throw new Error('API F1 no responde');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
