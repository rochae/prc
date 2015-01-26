// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentNavbar.helpers({
        
        addPurchaseOrder: function() {
            //console.log('purchaseOrderEquipmentNavbar - addEditPurchaseOrder');
            return Session.get('addPurchaseOrder');
        },

        readonly: function() {
            //console.log('purchaseOrderEquipmentNavbar - readonly');
            if (Session.get("addEditPurchaseOrderEquipment")) {
                return "disabled";
            }
            return "";
        },

    });

} //: - Meteor.isClient