// : - purchase order equipment detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategory: function() {
            return EquipmentCategories.find({}, { sort: { name : 1 }});
        },

    });

} //: - Meteor.isClient