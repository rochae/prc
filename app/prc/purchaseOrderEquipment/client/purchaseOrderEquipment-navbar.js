// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentNavbar.helpers({
        
        readonly: function() {
            //console.log('purchaseOrderEquipmentNavbar - readonly');
            if (Session.get("addEditPurchaseOrderEquipment")) {
                return "disabled";
            }
            return "";
        },

        viewPurchaseOrder: function() {
            //console.log('purchaseOrderEdit - addEditPurchaseOrder');
            return ((Session.get('editPurchaseOrder')) && (! Session.get('addPurchaseOrder')));
        },

    });

} //: - Meteor.isClient