module.exports = function (context, req) {
    const {
        id,
        name
    } = req.body;

    // or you could limit the in to only be one doc
    const foundDoc = context.bindings.productDocumentsIn.find(p => p.id == id);

    // do the update
    context.bindings.productDocument = foundDoc;
    context.bindings.productDocument.name = name;

    context.done();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Record updated"
    };
};