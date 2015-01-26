// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategoryItems: function() {
            return EquipmentCategoryCollection.find({}, { sort: { _name : 1 }});
        },

        selectedEquipmentCategory: function (category) {
            if (category === this._name) {
                return 'selected'
            }
        },

        unitItem: function() {
            return [ { unitName : "Each" }, { unitName : "Lot" }, ];
        },

        selectedUnit: function (unit) {
            if (unit === this.unitName) {
                return 'selected'
            }
        },

        editPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return Session.get('addPurchaseOrder');
        },

        equipmentItem: function() {
            console.log('purchaseOrderEquipmentDetail - equipmentItem');
            if ((Session.get('editPurchaseOrder')) && (Session.get('editPurchaseOrderEquipment'))) {
                console.log('findOne equipmentItem this.equipmentId: ', this.equipmentId);
                console.log('FindOne equipmentItem: ', EquipmentCollection.findOne({_id : this.equipmentId}));
                return EquipmentCollection.findOne({_id : this.equipmentId});
            }
            console.log('this.equipment', this.equipment);
            return this.equipment || {};
        },

    });

    Template.purchaseOrderEquipmentDetail.rendered = function() {
        console.log('purchaseOrderEquipmentDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };

} //: - Meteor.isClient