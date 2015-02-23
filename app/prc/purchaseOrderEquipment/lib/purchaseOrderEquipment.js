// : - PurchaseOrderEquipment Collection
PurchaseOrderEquipmentCollection = new Mongo.Collection("purchaseOrderEquipment");

// : - Server 
if (Meteor.isServer) {

    Meteor.publish('PurchaseOrderEquipmentCollection', function(purchaseOrderId) {
        //console.log('purchaseOrderId: ', purchaseOrderId);
        //console.log(PurchaseOrderEquipmentCollection.find({purchaseOrderId: purchaseOrderId}).fetch() || []);
        return PurchaseOrderEquipmentCollection.find({purchaseOrderId: purchaseOrderId});
    });

}

// : - Client 
if (Meteor.isClient) {

    Session.setDefault('purchaseOrderId', 0);

    Meteor.autorun( function() {
        Meteor.subscribe('PurchaseOrderEquipmentCollection', Session.get('purchaseOrderId'));
    });

}

// : - PurchaseOrderEquipment Class
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

// : - Helper Functions
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
