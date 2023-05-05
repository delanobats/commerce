import axios from 'axios'

export default async function getBlogs(
  req,
  res
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
    res.status(200).json({ data }) 
  }).catch(({error}) => {
    res.status(400).json({ error })
  })
}