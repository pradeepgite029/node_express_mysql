const express = require("express");
const db = require('../config/db');
require('dotenv').config();
const User = require('../models/users');
const UserDetails = require('../models/user-details');

// User.sync({force: true});

exports.createUser =  async (req, res)=> {
    const data = JSON.parse(req.body);
    try {
      const data1 = User.create({ first_name: data.first_name });
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
}

exports.home = async (req, res)=> {
        try {
          const users = await User.findAll({
            attributes: ['first_name'],
            include: User.userDetail
            // where: {
            //   'firstname': 'test'
            // }
          });
          res.status(200).json({
            success: true,
            message: "Success",
            data: users
          })
        } catch (error) {
          res.status(500).send({
            success: false,
            message: "Oops Something wrong here",
            error
          })
      
        }
};
