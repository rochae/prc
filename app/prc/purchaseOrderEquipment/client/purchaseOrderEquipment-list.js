// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id});
        },

        equipmentItem: function() {
            return EquipmentCollection.findOne({_id : this.equipmentId});
        },

    });

} //: - Meteor.isClient