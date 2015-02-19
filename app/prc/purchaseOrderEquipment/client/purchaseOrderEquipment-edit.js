// : - purchase order equipment add javascripts

if (Meteor.isClient) {  

    // : - helpers
    Template.purchaseOrderEquipmentEdit.helpers({

        showModal: function() {
            purchaseOrderEquipmentId = Session.get('purchaseOrderEquipmentId')
            return ((Session.get('editPurchaseOrderEquipment')) && ( purchaseOrderEquipmentId === this._id));
        },

        deletePurchaseOrderEquipment: function() {
            return Session.get('deletePurchaseOrderEquipment');
        },

    });       

    // : - events
    Template.purchaseOrderEquipmentEdit.events({

        'click .close, click #purchase-order-equipment-close-btn': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentEdit - click .close, click #equipment-close-btn');
            Session.set('editPurchaseOrderEquipment', false);
            Session.set('deletePurchaseOrderEquipment', false);
            Session.set('purchaserOrderEquipmentId', 0);
            Session.set('purchaseOrderEquipmentDatasheet', null);
        },
    
        'click #purchase-order-equipment-save-btn': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentEdit - click #equipment-save-btn');
            event.preventDefault();
            Session.set('editPurchaseOrderEquipment', false);
            Session.set('deletePurchaseOrderEquipment', false);
            Session.set('purchaserOrderEquipmentId', 0);

            equipment              = equipmentFromTemplate(tpl);
            purchaseOrderEquipment = purchaseOrderEquipmentFromTemplate(tpl);

            purchaseOrderEquipment.equipmentId     = this.equipmentId;
            purchaseOrderEquipment.purchaseOrderId = this.purchaseOrderId;
            purchaseOrderEquipment.datasheet       = Session.get('purchaseOrderEquipmentDatasheet');

            EquipmentCollection.update({_id : this.equipmentId}, equipment);
            PurchaseOrderEquipmentCollection.update({_id : this._id}, purchaseOrderEquipment)
        },

        'click #purchase-order-equipment-delete-btn': function(evt, tpl) {
            Session.set('deletePurchaseOrderEquipment', true);
        },

        'click #purchase-order-equipment-delete-cancel-btn': function(evt, tpl) {
            Session.set('deletePurchaseOrderEquipment', false);
        },

        'click #purchase-order-equipment-delete-confirm-btn': function(evt, tpl) {
            Session.set('editPurchaseOrderEquipment', false);
            Session.set('deletePurchaseOrderEquipment', false);

            //console.log('Delete PurchaseOrderEquipmentId: ', this._id);
            purchaseOrderEquipment = PurchaseOrderEquipmentCollection.findOne({_id : this._id});
            //console.log('Delete PurchaseOrderEquipment: ', purchaseOrderEquipment);
         
            //console.log('Delete Equipment: ', EquipmentCollection.findOne({_id : purchaseOrderEquipment.equipmentId}));
            EquipmentCollection.remove({_id : purchaseOrderEquipment.equipmentId});
            //console.log('Deleted PurchaseOrderEquipmentId: ', this._id);
            
            PurchaseOrderEquipmentCollection.remove({_id : this._id});
            //console.log('Deleted PurchaseOrderEquipmentId: ', this._id);
            
        },

        'click #purchase-order-equipment-datasheet-remove': function(evt, tpl) {
            //console.log('click #purchase-order-equipment-datasheet-remove');
            Session.set('purchaseOrderEquipmentDatasheet', null);

        },

    });

} //: - Meteor.isClient