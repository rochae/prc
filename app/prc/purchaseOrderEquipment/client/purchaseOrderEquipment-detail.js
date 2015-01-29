// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentCategoryItems: function() {
            return EquipmentCategoryCollection.find({}, { sort: { categoryName : 1 }});
        },

        selectedEquipmentCategory: function (categoryName) {
            if (categoryName === this.categoryName) {
                return 'selected'
            }
        },

        unitItems: function() {
            return [ { unitName : "Each" }, { unitName : "Lot" }, ];
        },

        selectedUnit: function (unitName) {
            if (unitName === this.unitName) {
                return 'selected'
            }
        },

        editPurchaseOrder: function() {
            return Session.get('addPurchaseOrder');
        },

        equipmentItem: function() {
            //console.log('purchaseOrderEquipmentDetail - equipmentItem');
            //console.log('equipmentItem: ', EquipmentCollection.findOne({_id : this.equipmentId}) || {});
            return EquipmentCollection.findOne({_id : this.equipmentId}) || {};
        },

        /* ---
        myFormData : function() {
            console.log('myFormData this._id: ', this._id);
            console.log('this._id: ', this._id);
            console.log('this.purchaseOrderId: ', this.purchaseOrderId);
            console.log('this.equipmentId: ', this.equipmentId);
            purchaseOrderId = this.purchaseOrderId || this._id;
    
            return { purchaseOrderId : this._id, };
        }
        --- */
    });

    Template.purchaseOrderEquipmentDetail.rendered = function() {
        //console.log('purchaseOrderEquipmentDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };

} //: - Meteor.isClient