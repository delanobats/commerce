// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axiosInstance from '../../utils/axios'

export default async function handler(
  req,
  res 
) {
  await axiosInstance.get('/v3/catalog/products', {
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
