const express = require('express');
const router = express.Router();
const enquiryController=require('../controller/enquiryCourse.Controller');
//Enquiry Routing
router.post('/',enquiryController.addEnquiry);
router.get('/',enquiryController.findEnquiries);
router.get('/:EnquiryId',enquiryController.findEnquiryById);
//router.get('/:EnquiryDate',enquiryController.findEnquiryByDate);
router.put('/:EnquiryId',enquiryController.updateEnquiry);
router.delete('/:EnquiryId',enquiryController.deleteById);
module.exports = router;