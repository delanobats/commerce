import axiosInstance from '../../utils/axios'

export default async function getBlogs(
  req,
  res
) {
  await axiosInstance.get('/v2/blog/posts', {
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