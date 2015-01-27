// : - purchase order add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDelete.helpers({
        
        deletePurchaseOrder: function() {
            //console.log('purchaseOrderDelete - deletePurchaseOrder');
            return Session.get('deletePurchaseOrder');
        },

    });

    // : - events
    Template.purchaseOrderDelete.events({
        
        'click #purchase-order-delete-btn': function(evt, tpl) {
            //console.log('purchaseOrderDelete - click #purchase-order-delete-btn');
            Session.set('deletePurchaseOrder', true);
        },

        'click #purchase-order-delete-cancel-btn': function(evt, tpl) {
            //console.log('purchaseOrderDelete - click #purchase-order-delete-btn');
            Session.set('deletePurchaseOrder', false);
        },

        'click #purchase-order-delete-confirm-btn': function(evt, tpl) {
            //console.log('purchaseOrderDelete - purchase-order-delete-confirm-btn');
            //console.log('PurchaserOrder._id: ', this._id)
            Session.set('deletePurchaseOrder', false);
            purchaseOrderEquipmentItems = PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id});
            purchaseOrderEquipmentItems.forEach(function(elem, idx, arry) {
                console.log('PurchaseorderEquipment._id: ', elem._id);
                console.log('PurchaseorderEquipment.purchaseOrderId: ', elem.purchaseOrderId);
                console.log('PurchaseorderEquipment.equipment: ', elem.equipment);
                EquipmentCollection.findOne({_id : elem.equipmentId})
                console.log('insert Equipment', EquipmentCollection.findOne({_id : elem.equipmentId}));
                
                });
            Router.go('/purchaseOrder');
        },

    });

} //: - Meteor.isClient
