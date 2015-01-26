// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            console.log('purchaseOrderEquipmentList - purchaseOrderEquipmentItems');
            //purchaseOrderEquipment = PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
            //return PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
            //if (Session.get('editPurchaseOrder')) {
            //    console.log('FindOne purchaseOrderEquipmentItems: ', PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0}).fetch());
            //    return PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id});
            //}   
            console.log('Session purchaseOrderEquipmentItems: ', Session.get('purchaseOrderEquipmentItems'));
            return Session.get('purchaseOrderEquipmentItems');
        },

        equipmentItem: function() {
            console.log('purchaseOrderEquipmentList - equipmentItem');
            //if (Session.get('editPurchaseOrder')) {
            //    console.log('findOne equipmentItem this.equipmentId: ', this.equipmentId);
            //    console.log('FindOne equipmentItem: ', EquipmentCollection.findOne({_id : this.equipmentId}));
            //    return EquipmentCollection.findOne({_id : this.equipmentId});
            //}
            console.log('this.equipment', this.equipment);
            return this.equipment;
        },

    });

} //: - Meteor.isClient