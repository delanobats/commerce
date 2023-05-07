import axiosInstance from '../../utils/axios';
import Cookies from 'js-cookie';

const cartId = Cookies.get('bc_cartId');

export default async function handler(req, res) {
  // const cartId = cartIdCookie ? await axiosInstance.get(`v3/carts/${cartIdCookie}`) : null;

  // if (cartId) {
  await axiosInstance
    .post(`v3/carts/${cartId}/items?include=redirect_urls`, req.body)
    .then(({ data }) => {
      res.status(200).json({ data: data });
    })
    .catch(({ error }) => {
      res.status(400).json({ error });
    });
  // } else {
  //   Cookies.remove('bc_cartId');
  //   await axiosInstance
  //     .post(`v3/carts?include=redirect_urls`, req.body)
  //     .then(({ data }) => {
  //       res.status(200).json({ data });
  //     })
  //     .catch(({ error }) => {
  //       res.status(400).json({ error });
  //     });
  // }
}
