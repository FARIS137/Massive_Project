/*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
    npm install --save midtrans-client*/

//SAMPLE REQUEST START HERE

// const midtransClient = require("midtrans-client");
// const express = require(express);
// // Create Snap API instance
// let snap = new midtransClient.Snap({
//         // Set to true if you want Production Environment (accept real transaction).
//         isProduction : false,
//         serverKey : 'SB-Mid-server-gFFwFd7w-E6oPS51rJ_Xc1ft',
//         clientKey : 'SB-Mid-client-WOoPPbfnTN9f1vOr',
//     });

//     export async function post(request) {
//         const {id, nama, tiket, tanggal, email, paket_wisata, No_hp, totalHargaSemua } = await request.json()

//         let parameter = {
//             "transaction_details": {
//                 "order_id": id,
//                 "gross_amount": totalHargaSemua
//             },
//             "credit_card":{
//                 "secure" : true
//             },
//             "customer_details": {
//                 nama: nama,
//                 tiket: tiket,
//                 tanggal: tanggal,
//                 email: email,
//                 paket_wisata: paket_wisata,
//                 No_hp: No_hp

//             }
//         };

//         const token = await snap.createTransactionToken(parameter)
//         console.log(token)
//         return express.json({token});

//     }

/*Install midtrans-client (https://github.com/Midtrans/midtrans-nodejs-client) NPM package.
npm install --save midtrans-client*/

//SAMPLE REQUEST START HERE

const express = require('express');
const { nanoid } = require('nanoid');
const midtransClient = require('midtrans-client');

const router = express.Router();

router.post('/payments-tiket', (req, res) => {
  const { nama, tiket, tanggal, email, paket_wisata, pemandu, No_hp, totalHargaSemua } = req.body;
  const generatePaddedOrderId = () => {
    const timestamp = new Date().getTime();
    return `ORD-${timestamp}`;
  };

//   const totalHargaSemua = tiket + paket_wisata;

  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: 'SB-Mid-server-gFFwFd7w-E6oPS51rJ_Xc1ft',
      clientKey: 'SB-Mid-client-WOoPPbfnTN9f1vOr',
    });

    const payments_id = generatePaddedOrderId();

    const parameter = {
      transaction_details: {
        order_id: payments_id,
        gross_amount: totalHargaSemua,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        nama: nama,
        tiket: tiket,
        tanggal: tanggal,
        paket_wisata: paket_wisata,
        pemandu: pemandu,
        email: email,
        No_hp: No_hp,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      const dataPayment = {
        response: JSON.stringify(transaction),
      };
      const token = transaction.token;

      res.status(200).json({ msg: 'berhasil', dataPayment, token: token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;



