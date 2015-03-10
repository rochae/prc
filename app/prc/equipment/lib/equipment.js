// : - Equipment Collection
EquipmentCollection = new Mongo.Collection("equipment");

// : - Server 
if (Meteor.isServer) {

    Meteor.publish('EquipmentCollection', function(purchaseOrderId) {
        //console.log('purchaseOrderId: ', purchaseOrderId);
        //equipmentIdsCursor = PurchaseOrderEquipmentCollection.find({purchaseOrderId: purchaseOrderId}, {fields:{_id:0, equipmentId: 1}});
        //equipmentIds       = equipmentIdsCursor.map(function(i){ return i.equipmentId; });
        //console.log('equipmentIds', equipmentIds)
        //return EquipmentCollection.find({_id: {$in: equipmentIds} });
        return EquipmentCollection.find();
    });

};

// : - Client 
if (Meteor.isClient) {

    Meteor.autorun( function() {
        console.log('autorun purchaseOrderId:', Session.get('purchaseOrderId'));
        purchaseOrderId = Session.get('purchaseOrderId');
        Meteor.subscribe('EquipmentCollection', Session.get('purchaseOrderId'));
    });

};

// : - Equipment Class
Equipment = function() { 
    this.category     = null;
    this._name        = null;
    this._description = null;
};

// : - Helper Functions
equipmentFromTemplate = function(tpl) {
    equipment = new Equipment();
    equipment.category     = tpl.find('#equipmentCategory').value;
    equipment._name        = tpl.find('#equipmentName').value;
    equipment._description = tpl.find('#equipmentDescription').value;
    return equipment;
};

