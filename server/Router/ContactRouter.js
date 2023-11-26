const express=require('express');
const router=express.Router();
const controller=require('../Controller/ContactController')

router.route("/").get(controller.ShowContact).post(controller.InsertContact)
router.route("/:id").put(controller.UpdateContact).delete(controller.DeleteContact);


module.exports=router;
