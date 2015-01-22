// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            console.log('purchaseOrderEquipmentList - equipmentItems');
            console.log('this._id', this._id || 0);
            console.log('equipmentItems', PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0}).fetch());
            //purchaseOrderEquipment = PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
        },

        equipmentItem: function() {
            console.log('Equipment - equipmentItem');
            console.log('this.equipmentId', this.equipmentId);
            console.log('equipmentItems', EquipmentCollection.find({_id: this.equipmentId}).fetch());
            equipment = EquipmentCollection.find({_id: this.equipmentId});
            return EquipmentCollection.findOne({_id: this.equipmentId});
        },

    });

/* --
    // : - events
    Template.purchaseOrderEquipmentHome.events({

        'click #purchase-order-equipment-add-btn': function(e, t) {
            console.log('purchaseOrderEquipmentHome - click #purchase-order-equipment-add-btn');
            Session.set('addPurchaseOrderEquipment', true);      
        },

    });
-- */

} //: - Meteor.isClient