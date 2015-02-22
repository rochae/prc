// : - Purchase Order Equipment
PurchaseOrderEquipmentCollection = new Mongo.Collection("purchaseOrderEquipment");

PurchaseOrderEquipment = function() {
    this.purchaseOrderId = null;
    this.equipmentId     = null;
    this.item            = null;
    this.quantity        = null;
    this.unit            = null;
    this.equipmentTag    = null;
    this.wbsNo           = null;
    this.priceUnit       = null;
    this.priceExtended   = null;
    this.documentsLink   = null;
    this.datasheetId     = null;
};

purchaseOrderEquipmentFromTemplate = function(tpl) {
    purchaseOrderEquipment = new PurchaseOrderEquipment();
    purchaseOrderEquipment.item                   = tpl.find('#item').value;
    purchaseOrderEquipment.quantity               = tpl.find('#quantity').value;
    purchaseOrderEquipment.unit                   = tpl.find('#unit').value;
    purchaseOrderEquipment.equipmentTag           = tpl.find('#equipmentTag').value;
    purchaseOrderEquipment.wbsNo                  = tpl.find('#wbsNo').value;
    purchaseOrderEquipment.priceUnit              = tpl.find('#priceUnit').value;
    purchaseOrderEquipment.priceExtended          = tpl.find('#priceExtended').value;
    purchaseOrderEquipment.documentsLink          = tpl.find('#documentsLink').value;
    return purchaseOrderEquipment;
};


// : - CollectionFS

datasheetStore = new FS.Store.FileSystem("datasheet", {
  path: "/Users/erocha/Development/prc/app/docs/datasheet", //optional, default is "/cfs/files" path within app container
  //transformWrite: myTransformWriteFunction, //optional
  //transformRead: myTransformReadFunction, //optional
  //maxTries: 1 //optional, default 5
});

DatasheetFSCollection = new FS.Collection("datasheet", {
  stores: [datasheetStore]
});