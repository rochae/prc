// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.equipmentDetail.helpers({

        equipmentCategory: function() {
            return EquipmentCategories.find({}, { sort: { name : 1 }});
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

    });



} //: - Meteor.isClient