import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data?: string,
  error?: string,
}

export default async function getBlogs(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await axios.get('https://api.bigcommerce.com/stores/jo3a1dt1/v2/blog/posts', {
    headers: {
      accept: 'application/json',
      'X-Auth-Token': 'axkiw2t6o9us7bcafi83lxcdzl3f65t'
    },
    params: {
      is_published: true,
      limit: 3
    }
  }).then(({data}) => {
    console.log('data', data)
    res.status(200).json({ data }) 
  }).catch(({error}) => {
    res.status(400).json({ error })
  })
}