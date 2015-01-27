// : - purchase order equipment add javascripts

if (Meteor.isClient) {  

    // : - helpers
    Template.purchaseOrderEquipmentEdit.helpers({

        showModal: function() {
            purchaseOrderEquipmentId = Session.get('purchaseOrderEquipmentId')
            return ((Session.get('editPurchaseOrderEquipment')) && ( purchaseOrderEquipmentId === this._id));
        },

    });       

    // : - events
    Template.purchaseOrderEquipmentEdit.events({

        'click .close, click #equipment-close-btn': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentEdit - click .close, click #equipment-close-btn');
            Session.set('editPurchaseOrderEquipment', false);
            Session.set('purchaserOrderEquipmentId', null);
        },
    
        'click #equipment-save-btn': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentEdit - click #equipment-save-btn');
            event.preventDefault();
            Session.set('editPurchaseOrderEquipment', false);

            equipment              = equipmentFromTemplate(tpl);
            purchaseOrderEquipment = purchaseOrderEquipmentFromTemplate(tpl);

            purchaseOrderEquipment.equipmentId     = this.equipmentId;
            purchaseOrderEquipment.purchaseOrderId = this.purchaseOrderId;

            EquipmentCollection.update({_id : this.equipmentId}, equipment);
            PurchaseOrderEquipmentCollection.update({_id : this._id}, purchaseOrderEquipment)
        }

    });

} //: - Meteor.isClient