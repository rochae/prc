// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id}, { sort: { item : 1 }});
        },

        equipmentItem: function() {
            return EquipmentCollection.findOne({_id : this.equipmentId});
        },

        myFormData : function() {
            return { purchaseOrderId : this.purchaseOrderId,
                     purchaseOrderEquipmentId : this._id, };
        }

    });

} //: - Meteor.isClient