const resourcEnquiryDao = require('../dao/enquiryResourceDao');

var resourceEnquiryController={
    addResourceEnquiry:addResourceEnquiry,
    findResourceEnquiries:findResourceEnquiries,
    findResEnquiryById:findResEnquiryById,
    findResEnquiryByDate:findResEnquiryByDate,
    updateResEnquiry:updateResEnquiry,
    deleteById:deleteById

}
 function addResourceEnquiry(req,res){
     let rEnquiry = req.body;
     resourcEnquiryDao.create(rEnquiry).
     then((data) => {
       
         res.send(data);
     })
     .catch((error)=>{
         console.log(error);
     });
 }

 function findResEnquiryById(req,res){
    resourcEnquiryDao.findById(req.params.rEnquiryId)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function findResEnquiryByDate(req,res){
    resourcEnquiryDao.findByDate(req.params.rEnquiryDate)
     .then((data) => {

         res.send(data);
     })
     .catch((error) =>{
         console.log(error);
     });
 }



 function deleteById(req,res){
    resourcEnquiryDao.deleteById(req.params.rEnquiryId).
     then((data) =>{
         res.status(200).json({
             message:"Enquiry deleted successfully",
             user:data
         })
     })
     .catch((error) =>{
         console.log(error);
     });
 }

 function updateResEnquiry(req,res){
    resourcEnquiryDao.updateResourceEnquiry(req.body,req.params.rEnquiryId).
     then((data) =>{
         res.status(200).json({
             message:"Resource Enquiry updated successfully",
             rEnquiry:data
         })
     })
     .catch((error)=>{
         console.log(error)
     });
 }
 function findResourceEnquiries(req,res){
    resourcEnquiryDao.findAll().
     then((data)=>{
         res.send(data)
     })
     .catch((error) =>{
         console.log(error)
     });

     }
 module.exports = resourceEnquiryController;