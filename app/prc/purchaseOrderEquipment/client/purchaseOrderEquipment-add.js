// : - purchase order equipment add javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentAdd.helpers({

        purchaseOrderEquipmentItem : function() {
            return new PurchaseOrderEquipment();
        },

        showModal: function() {
            console.log('purchaseOrderEquipmentAdd - showModal');
            if (Session.get('addPurchaseOrderEquipment')) {
                return "show";
            }
        },

    });

    // : - events
    Template.purchaseOrderEquipmentAdd.events({

        'click #purchase-order-equipment-cancel-btn': function(evt, tpt) {
            console.log('purchaseOrderEquipmentAdd - click #purchase-order-equipment-cancel-btn');
            Session.set('addPurchaseOrderEquipment', false);
        },
        
        'click #purchase-order-equipment-save-btn': function(evt, tpl) {
            console.log('purchaseOrderEquipmentAdd - purchase-order-equipment-save-btn');
            //e.preventDefault();
            Session.set('addPurchaseOrderEquipment', false);
            
            //console.log('purchaseOrderEquipmentAdd - purchaseOrder.equipmentItems: ', this.equipmentItems);
            //purchaseOrder = new PurchaseOrder().fromTemplate(tpl);
            //PurchaseOrderCollection.insert(purchaseOrder);
        },

        'click .close, click #equipment-close-btn': function(evt, tpl) {
            console.log('purchaseOrderEquipmentAdd - click .close, click #equipment-close-btn');
            Session.set('addPurchaseOrderEquipment', false);
        },
    
        'click #equipment-save-btn': function(evt, tpl){
            event.preventDefault();
            console.log('purchaseOrderEquipmentAdd - click #equipment-save-btn');
            Session.set('addPurchaseOrderEquipment', false);
        }

    });

} //: - Meteor.isClient