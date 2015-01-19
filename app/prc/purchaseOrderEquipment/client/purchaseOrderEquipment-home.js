// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentHome.helpers({

        addPurchaseOrderEquipment: function() {
            console.log('purchaseOrderEquipmentHome - addPurchaseOrderEquipment');
            return Session.get('addPurchaseOrderEquipment');
        },

    });

    // : - events
    Template.purchaseOrderEquipmentHome.events({
        'click #purchase-order-equipment-add-btn': function(e, t) {
            console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);
            t.$('#myModal').modal('toggle');
            console.log('foobar: ', t.$('#myModal'))
        },
    });

    // : - helpers
    Template.purchaseOrderEquipmentNavbar.helpers({
        
        addEditPurchaseOrder: function() {
            //console.log('purchaseOrderEquipmentNavbar - addEditPurchaseOrder');
            return Session.get('addPurchaseOrder');
        },

        readonly: function() {
            console.log('purchaseOrderNavbar - readonly');
            if (Session.get("addPurchaseOrderEquipment")) {
                return "disabled";
            }
            return "";
        },

        addPurchaseOrderEquipment: function() {
            //console.log('purchaseOrderEquipmentNavbar - addEditPurchaseOrder');
            return Session.get('addPurchaseOrderEquipment');
        },

    });

} //: - Meteor.isClient