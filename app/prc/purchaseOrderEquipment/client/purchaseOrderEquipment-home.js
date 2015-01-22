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

    // : - events
    Template.purchaseOrderEquipmentHome.events({

        'click #purchase-order-equipment-add-btn': function(e, t) {
            console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);    
        },

    });

} //: - Meteor.isClient