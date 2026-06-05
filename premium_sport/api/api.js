export default async function handler(req, res) {
  // Esta función hace la petición a OpenF1 desde el servidor de Vercel
  const response = await fetch('https://api.openf1.org/v1/drivers?session_key=9158');
  const data = await response.json();

  // Enviamos los datos al navegador sin que haya bloqueos
  res.status(200).json(data);
}