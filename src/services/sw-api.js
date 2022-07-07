const baseUrl = "https://swapi.dev/api/"

export async function getStarShips() {
  const res = await fetch(`${baseUrl}starships`)
  return res.json()
}