const baseUrl = "https://swapi.dev"

export async function getStarShips() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}