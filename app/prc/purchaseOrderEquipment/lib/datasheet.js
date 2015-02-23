// : - Datasheet Storage
datasheetStore = new FS.Store.FileSystem("datasheet", {
  path: "~/Development/prc/app/docs/datasheet", //optional, default is "/cfs/files" path within app container
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  //maxTries: 1 //optional, default 5
});

// : - DatasheetFS Collection
DatasheetFSCollection = new FS.Collection("datasheet", {
  stores: [datasheetStore]
});

// : - Server 
if (Meteor.isServer) {

    Meteor.publish('DatasheetFSCollection', function(purchaseOrderId) {
      datasheetIdsCursor = PurchaseOrderEquipmentCollection.find({purchaseOrderId: purchaseOrderId}, {fields:{_id: 0, datasheetId: 1}});
      datasheetIds       = datasheetIdsCursor.map(function(i){ return i.datasheetId; });
      return DatasheetFSCollection.find({_id: {$in: datasheetIds} });
      //return DatasheetFSCollection.find();
    });

};

// : - Client 
if (Meteor.isClient) {

    Meteor.autorun( function() {
        Meteor.subscribe('DatasheetFSCollection', Session.get('purchaseOrderId'));
    });

};