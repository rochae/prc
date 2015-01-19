// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategory: function() {
            return EquipmentCategoryCollection.find({}, { sort: { name : 1 }});
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

    });

    
    Template.purchaseOrderEquipmentDetail.rendered = function() {
        console.log('purchaseOrderDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };



} //: - Meteor.isClient