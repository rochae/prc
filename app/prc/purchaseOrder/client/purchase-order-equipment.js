// : - purchase order equipment detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentNavbar.helpers({
        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },
    });
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategory: function() {
            return EquipmentCategories.find({}, { sort: { name : 1 }});
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

    });



} //: - Meteor.isClient