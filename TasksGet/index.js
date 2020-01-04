module.exports = function (context, req) {
    for(var i =0; i< context.bindings.taskDocument.length; i++) {
        let task = context.bindings.taskDocument[i];
        context.log('id', task.id); 
        context.log('name', task.name);
    }
  
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Ran TasksGet"
    };
  };