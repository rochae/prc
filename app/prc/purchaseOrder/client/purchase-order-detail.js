// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDetail.helpers({

        readonly: function() {
            console.log('purchaseOrderDetail - readonly');
            if (Session.get("addPurchaseOrder")){
                return "";
            }
            return "disabled";
        },

        checkedMarketDomestic: function() {
            console.log('purchaseOrderDetail - checkedMarketDomestic');
            if ( this.market === 'Domestic') {
                return 'checked';
            }
        },

        checkedMarketInternational: function() {
            console.log('purchaseOrderDetail - checkedMarketInternational');
            if ( this.market === 'International') {
                return 'checked';
            }
        },

    });

    Template.purchaseOrderDetail.rendered = function() {
        console.log('purchaseOrderDetail.rendered - this.$(input)[0]:', this.$('input')[0])
        this.$('input')[0].focus() 
    };

} //: - Meteor.isClient
