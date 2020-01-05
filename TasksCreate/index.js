module.exports = function (context, req) {
    const { id, name, owner, list, status } = req.body;

   // creating doc
   context.bindings.productDocument = JSON.stringify({
       id: id,
       name: name, 
       owner: owner, 
       list: list, 
       status: status
   });

   // saving doc
   context.done();
};