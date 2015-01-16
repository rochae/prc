// : - purchase order equipment javascripts

if (Meteor.isClient) {

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

    });

    // : - events
    Template.purchaseOrderEquipmentHome.events({
        'click #purchase-order-equipment-add-btn': function(e, t) {
            console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);
        },
    });

} //: - Meteor.isClient