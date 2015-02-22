// : - purchase order equipment detail javascripts

if (Meteor.isClient) {
    
    Template.purchaseOrderEquipmentDetail.helpers({

        equipmentItem: function() {
            return EquipmentCollection.findOne({_id : this.equipmentId}) || {};
        },

        equipmentCategoryItems: function() {
            return EquipmentCategoryCollection.find({}, { sort: { _name : 1 }});
        },

        selectedEquipmentCategory: function (categoryName) {
            if (categoryName === this._name) {
                return 'selected'
            }
        },

        unitItems: function() {
            return [ { unitName : "Each" }, { unitName : "Lot" }, ];
        },

        selectedUnit: function (unitName) {
            if (unitName === this.unitName) {
                return 'selected'
            }
        },

        editPurchaseOrder: function() {
            return Session.get('addPurchaseOrder');
        },

        datasheetName: function() {
            datasheetId = Session.get('purchaseOrderEquipmentDatasheetId');
            if (datasheetId) {
                datasheet = DatasheetFSCollection.findOne({_id : datasheetId })
                if (datasheet) {
                    //console.log('datasheet: ', datasheet);
                    return datasheet.name();
                }  
            }
            return 'Drag and Drop Datasheet File into this Window'
        },

        datasheetId: function() {
            return Session.get('purchaseOrderEquipmentDatasheetId')
        },

    });

    Template.purchaseOrderEquipmentDetail.rendered = function() {
        //console.log('purchaseOrderEquipmentDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };

    // : - events
    Template.purchaseOrderEquipmentDetail.events({

        'change #files': function(event, temp) {
            //console.log('files changed');
            FS.Utility.eachFile(event, function(file) {
                var fileObj = new FS.File(file);
                //fileObj.metadata = { owner: Meteor.userId() };
                DatasheetFSCollection.insert(fileObj);
            });
        },

        'dropped #datasheet-dropzone': function(event, temp) {
            //console.log('file droped');
            FS.Utility.eachFile(event, function(file) {
                var fileObj = new FS.File(file);
                //fileObj.metadata = { owner: Meteor.userId() };
                DatasheetFSCollection.insert(fileObj);
                Session.set('purchaseOrderEquipmentDatasheetId', fileObj._id);
                //console.log('-->inserted Object', fileObj._id);
                //console.log('-->inserted Object', fileObj.name());
            });
        },

        'click .btnRemove': function(event, temp) {
            this.remove();
        },

    });



} //: - Meteor.isClient