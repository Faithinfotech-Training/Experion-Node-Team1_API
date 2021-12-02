const Sequelize = require('sequelize');
const db=require('../config/database');

const resourceEnquiry=db.define('rEnquiry',{
    

    rEnquiryId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    resourceName:{
        type:Sequelize.STRING,
        // allowNull:false
    },
    rEnquiryDate:{
        type:Sequelize.DATEONLY,
        // allowNull:false
        
    },
    
    rStatus:{
        type:Sequelize.STRING
        
    },

   
    
});

module.exports = resourceEnquiry;