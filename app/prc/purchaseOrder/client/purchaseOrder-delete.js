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
            //console.log('Delete PurchaserOrderId: ', this._id)
            Session.set('deletePurchaseOrder', false);
            
            purchaseOrderEquipmentItems = PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id});
            //console.log('purchaseOrderEquipmentItems Length: ', purchaseOrderEquipmentItems.fetch().length);
            if (purchaseOrderEquipmentItems.fetch().length) {
                //console.log('purchaseOrderEquipmentItems: ', purchaseOrderEquipmentItems.fetch());
                purchaseOrderEquipmentItems.fetch().forEach(function(elem, idx, arry) {
                    //console.log('elem._id: ', elem._id);
                    //console.log('elem.purchaseOrderId: ', elem.purchaseOrderId);
                    //console.log('elem.equipmentId: ', elem.equipmentId);
                    //equipment = EquipmentCollection.findOne({_id : elem.equipmentId})
                    EquipmentCollection.remove({_id : elem.equipmentId});
                    //console.log('Removed Equipment: ', elem.equipmentId, res);
                    PurchaseOrderEquipmentCollection.remove({_id : elem._id});
                    //console.log('Removed PurchaseOrderEquipment: ', elem._id, res);
                    });
            }
            PurchaseOrderCollection.remove({_id : this._id});
            //console.log('Removed PurchaserOrderId: ', this._id)
            Router.go('/purchaseOrder');
        },

    });

} //: - Meteor.isClient
