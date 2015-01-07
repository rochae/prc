// : - purchase order home javascripts

if (Meteor.isClient) {

    // : - Initialize session variables
    Session.setDefault("selectedPurchaseOrderId", 0);
    Session.setDefault("addPurchaseOrder", false);
    Session.setDefault("editPurchaseOrder", false);
    Session.setDefault("addPurchaseOrderEquipment", false);

    // : - helpers
    Template.purchaseOrderHome.helpers({

        addPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return (Session.get("addPurchaseOrder"));
        },
        
    });

} //: - Meteor.isClient