if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetailModal.helpers({

        editPurchaseOrderEquipment: function() {
            //console.log('purchaseOrderEquipmentDetailModal - editPurchaseOrderEquipment');
            return Session.get('editPurchaseOrderEquipment');
        },

    });

} //: - Meteor.isClient