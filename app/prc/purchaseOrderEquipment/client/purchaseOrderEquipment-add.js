// : - purchase order equipment add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentAdd.helpers({

        showModal: function() {
            //console.log('purchaseOrderEquipmentAdd - showModal');
            return (Session.get('addPurchaseOrderEquipment'));
            //if (Session.get('addPurchaseOrderEquipment')) {
            //    return "show";
            //}
        },

    });        

    // : - events
    Template.purchaseOrderEquipmentAdd.events({

        'click .close, click #purchase-order-equipment-close-btn': function(evt, tpl) {
            //console.log('purchaseOrderEquipmentAdd - click .close, click #equipment-close-btn');
            Session.set('addPurchaseOrderEquipment', false);
            Session.set('purchaseOrderEquipmentDatasheetId', null);
        },
    
        'click #purchase-order-equipment-save-btn': function(evt, tpl) {
            //evt.preventDefault();
            //console.log('purchaseOrderEquipmentAdd - click #equipment-save-btn');
            Session.set('addPurchaseOrderEquipment', false);

            equipment              = equipmentFromTemplate(tpl);
            purchaseOrderEquipment = purchaseOrderEquipmentFromTemplate(tpl);

            equipmentId = EquipmentCollection.insert(equipment);
            
            purchaseOrderEquipment.purchaseOrderId = this._id;
            purchaseOrderEquipment.equipmentId     = equipmentId;
            purchaseOrderEquipment.datasheetId     = Session.get('purchaseOrderEquipmentDatasheetId');
            
            PurchaseOrderEquipmentCollection.insert(purchaseOrderEquipment);
            
        },

        'click #purchase-order-equipment-datasheet-remove': function(evt, tpl) {
            console.log('add - removing datasheet');
            DatasheetFSCollection.remove({_id : Session.get('purchaseOrderEquipmentDatasheetId')});
            Session.set('purchaseOrderEquipmentDatasheetId', null);
            tpl.$('input')[0].focus() 
        },

    });

} //: - Meteor.isClient



