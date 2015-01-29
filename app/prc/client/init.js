// : - application javascripts

if (Meteor.isClient) {

    Meteor.startup(function() {
        console.log('Client - Startup - Uploader');
        Uploader.finished = function(fileInfo, templateContext) {
            console.log('Uploader fileInfo: ', fileInfo);
            console.log('Uploader templateContext: ', templateContext);
            pathArray = templateContext.path.split('/');
            console.log('pathArray: ', pathArray);
            //pruchaseOrderId = pathArray[0];
            purchaseOrderEquipmentId = pathArray[1];
            PurchaseOrderEquipmentCollection.update({_id : purchaseOrderEquipmentId}, {$set : {datasheet : templateContext.name }});
        };
    });
}