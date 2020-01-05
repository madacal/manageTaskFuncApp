module.exports = function (context, req) {
    for(var i =0; i< context.bindings.productDocument.length; i++) {
        let product = context.bindings.productDocument[i];
        context.log('id', product.id); 
        context.log('name', product.name);
    }
  
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Ran ProductsGet"
    };
  };