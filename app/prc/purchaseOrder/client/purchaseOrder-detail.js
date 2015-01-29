// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDetail.helpers({

        readonly: function() {
            //console.log('purchaseOrderDetail - readonly');
            if (Session.get("addPurchaseOrder")) {
                return '';
            }
            return 'disabled';
        },

        marketItems: function() {
            return [ {marketId : 'marketDomestic',     marketName : 'Domestic'},
                     {marketId : 'marketInternational', marketName : 'International'}, ];
        },

        selectedMarket: function (market) {
            if (market === this.marketName) {
                return 'selected'
            }
        },

        purchaseLocationItems: function() {
            return [ {purchaseLocationId : 'purchaseLocationOnshore',  purchaseLocationName : 'Onshore'},
                     {purchaseLocationId : 'purchaseLocationOffshore', purchaseLocationName : 'Offshore'}, ];
        },

        selectedPurchaseLocation: function (purchaseLocation) {
            if (purchaseLocation === this.purchaseLocationName) {
                return 'selected'
            }
        },

    });

    Template.purchaseOrderDetail.rendered = function() {
        //console.log('purchaseOrderDetail.rendered - this.$(input)[0].focus():', this.$('input')[0])
        this.$('input')[0].focus() 
    };

} //: - Meteor.isClient
