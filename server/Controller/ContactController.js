const {ContactSchema}=require('../Query/Queries');
const Dbconnect=require('../Config/DbConfig');
const con=Dbconnect();
const schema=ContactSchema;
//Create
exports.InsertContact=async(req,res)=>{
    try {
        const { Fname, Lname, Phone, Email} = req.body;
        const values = [Fname, Lname, Phone, Email, Profile, dobValue];
        (await con).query(schema.add,values,(err,result)=>{
            res.send(err?err:result)
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
// READ
exports.ShowContact = async (req, res, next) => {
    try {
        (await con).query(schema.show,(err,rows)=>{
            res.send(err?err:rows);
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};
//UPDATE
exports.UpdateContact=async(req,res)=>{
    try {
        const getid=req.params.id;
        const values =req.body;
        (await con).query(schema.update,[values,getid],(err,result)=>{
            res.send(err?err:result)
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
// DELETE
exports.DeleteContact=async(req,res)=>{
    try {
        const getid=req.params.id;
        (await con).query(schema.delete,getid,(err,result)=>{
            res.send(err?err:result)
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}