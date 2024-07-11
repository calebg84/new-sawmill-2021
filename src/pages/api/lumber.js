// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { slabFinder } from '../../app/services/firebaseFuncs'

export default (req, res) => {
  return slabFinder()
    .then((result) => {
      res.statusCode = 200
      res.json([...result])
    })
    .catch(function (error) {
      console.log(error)
      res.statusCode = 500
    })
}
