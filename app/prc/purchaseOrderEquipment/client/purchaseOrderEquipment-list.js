// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        equipmentItems: function() {
            console.log('purchaseOrderEquipmentList - equipmentItems');
            console.log('this._id', this._id || 0);
            console.log('equipmentItems', PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0}));
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId: this._id || 0});
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