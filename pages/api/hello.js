export default async (req, res) => {
    const poha = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then(res => console.log('res :>> ', res))
    console.log('res :>> ', poha);
  res.status(200).json(data)
}
 