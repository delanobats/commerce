import axiosInstance from '../../utils/axios';

export default async function handler(req, res) {
  await axiosInstance.post('/v3/customers/subscribers', req.body).then(({data}) => {
    res.status(200).json({ data: data }) 
  }).catch(({error}) => {
    res.status(400).json({ error })
  })
}
