// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(
  req,
  res 
) {
  await axios.get('https://api.bigcommerce.com/stores/jo3a1dt1/v3/catalog/products', {
    headers: {
      accept: 'application/json',
      'X-Auth-Token': 'axkiw2t6o9us7bcafi83lxcdzl3f65t'
    },
    params: {
      sku: 'THX-1138',
      include: 'images' 
    }
  }).then(({data}) => {
    res.status(200).json({ data: data.data }) 
  }).catch(({error}) => {
    res.status(400).json({ error })
  })
}
