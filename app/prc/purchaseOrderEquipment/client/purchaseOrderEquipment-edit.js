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
            datasheetId = Session.get('purchaseOrderEquipmentDatasheetId');
            if (datasheetId != this.datasheetId) {
                DatasheetFSCollection.remove({_id : datasheetId});
            }
            Session.set('purchaseOrderEquipmentDatasheetId', null);
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
            purchaseOrderEquipment.datasheetId     = Session.get('purchaseOrderEquipmentDatasheetId');

            if (this.datasheetId != purchaseOrderEquipment.datasheetId) {
                DatasheetFSCollection.remove({_id : this.datasheetId}); 
            }
            EquipmentCollection.update({_id : this.equipmentId}, equipment);
            PurchaseOrderEquipmentCollection.update({_id : this._id}, purchaseOrderEquipment)
            Session.set('purchaseOrderEquipmentDatasheetId', null);
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

            purchaseOrderEquipment = PurchaseOrderEquipmentCollection.findOne({_id : this._id});

            DatasheetFSCollection.remove({_id : urchaseOrderEquipment.datasheetId});
            EquipmentCollection.remove({_id : purchaseOrderEquipment.equipmentId});
            PurchaseOrderEquipmentCollection.remove({_id : this._id});
            
        },

        'click #purchase-order-equipment-datasheet-remove': function(evt, tpl) {
            datasheetId = Session.get('purchaseOrderEquipmentDatasheetId');
            if (datasheetId != this.datasheetId) {
                DatasheetFSCollection.remove({_id : datasheetId});
            }
            
            Session.set('purchaseOrderEquipmentDatasheetId', null);
            tpl.$('input')[0].focus() 
        },

    });

} //: - Meteor.isClient