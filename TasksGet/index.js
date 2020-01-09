module.exports = async function (context, req) {

    var tasks = [] ;

    for(var i =0; i< context.bindings.productDocument.length; i++) {
        let product = context.bindings.productDocument[i];
        context.log('id', product.id); 
        context.log('name', product.name);
        var task = {};
            task.id = product.id;
            task.name = product.name;
            task.owner = product.owner;
            task.list = product.list;
            task.status = product.status;
        
        tasks.push(task);
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body:tasks
    };
  };