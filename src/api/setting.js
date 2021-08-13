require('dotenv').config();

const apiVersion = process.env.apiVersion

const API = {
   ROUTES :{
      GATEWAY :`/${apiVersion}/pay`,
      PAY_CLIENT : (clientReference => `/${API.ROUTES.GATEWAY}/${clientReference}`),
      GET_PAYMENT : (paymentId => `/${API.ROUTES.GATEWAY}/{paymentId}`)
   }
 }

 module.exports = {
    API
 }