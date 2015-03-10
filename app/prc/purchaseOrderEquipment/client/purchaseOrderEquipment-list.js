// : - purchase order equipment home javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderEquipmentList.helpers({

        purchaseOrderEquipmentItems: function() {
            return PurchaseOrderEquipmentCollection.find({purchaseOrderId : this._id}, { sort: { item : 1 }});
        },

        equipmentItem: function() {
            console.log('list: purchaseOrderId ', Session.get('purchaseOrderId'));
            console.log('list:  this.equipmentId',  this.equipmentId);
            //console.log('list: this', this);
            return EquipmentCollection.findOne({_id : this.equipmentId});
        },

        datasheetName: function() {
            datasheet = DatasheetFSCollection.findOne({_id : this.datasheetId })
            if (datasheet) {
                return datasheet.name();
            }  
        },

        datasheetUrl: function() {
            datasheet = DatasheetFSCollection.findOne({_id : this.datasheetId })
            if (datasheet) {
                return datasheet.url();
            }  
        },

    });

} //: - Meteor.isClient