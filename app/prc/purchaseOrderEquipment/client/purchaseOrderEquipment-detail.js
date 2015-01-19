// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategoryItem: function() {
            return EquipmentCategoryCollection.find({}, { sort: { name : 1 }});
        },

        unitItem: function() {
            return [ { unitName : "Each" }, { unitName : "Lot" }, ];
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

        selectedUnit: function (unit) {
            if (unit === this.unitName) {
                return 'selected'
            }
        },

        selectedEquipmentCategory: function (category) {
            if (category === this.name) {
                return 'selected'
            }
        },

    });

    
    Template.purchaseOrderEquipmentDetail.rendered = function() {
        console.log('purchaseOrderDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };



} //: - Meteor.isClient