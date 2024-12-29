'use strict'

const mysqlPool = require('./config/db');
var cors = require('cors')
var express = require('./node_modules/express');
var app = module.exports = express();
app.use(cors());
const db = require('./config/db');
const product = require("./routes/product");

app.get('/update/:userId', express.raw({ type: '*/*' }), async function (req, res) {
  let reqData = JSON.parse(req.body);
  try {
    var sql = `UPDATE users SET first_name = ?, last_name = ?, mobile = ? WHERE id = ?`;
    const data1 = await db.query(sql, [reqData.first_name, reqData.last_name, reqData.mobile, req.params.userId], function (err, data) {
      if (err) {
      } else {
      }
    });
    res.status(200).json({
      success: true,
      message: "Success",
      data: data1[0]
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
      error
    })

  }
});

app.get('/delete/:userId', async function (req, res) {

  const data = await db.query(`DELETE FROM users WHERE id = ${req.params.userId} `);
  try {
    res.status(200).json({
      success: true,
      message: "Success",
      data: data[0]
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Oops Something wrong here",
      error
    })

  }
});

app.use('/user', product);

mysqlPool.query('SELECT 1').then(() => {
  console.log("SQL Connected");
});
app.listen(3000);