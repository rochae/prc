// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentHome.helpers({

        addPurchaseOrderEquipment: function() {
            console.log('purchaseOrderEquipmentHome - addPurchaseOrderEquipment');
            return Session.get('addPurchaseOrderEquipment');
        },

        editPurchaseOrderEquipment: function() {
            console.log('purchaseOrderEquipmentHome - editPurchaseOrderEquipment');
            return Session.get('editPurchaseOrderEquipment');
        },

    });

} //: - Meteor.isClient