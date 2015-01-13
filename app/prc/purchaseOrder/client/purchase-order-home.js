// : - purchase order home javascripts

if (Meteor.isClient) {

    // : - Initialize session variables
    Session.setDefault("purchaseOrderStatus", false);
    Session.setDefault("addPurchaseOrder", false);
    Session.setDefault("editPurchaseOrder", false);
    Session.setDefault("addPurchaseOrderEquipment", false);

} //: - Meteor.isClient