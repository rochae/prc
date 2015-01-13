// : - purchase order detail javascripts

if (Meteor.isClient) {

    // : - helpers
    Template.purchaseOrderDetail.helpers({

        addEditPurchaseOrder: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            return ((Session.get("addPurchaseOrder")) || (Session.get("editPurchaseOrder")));
        },

        readonly: function() {
            //console.log('purchaseOrderNavbar - helper -selectedPurchasedOrderStatus');
            if (Session.get("addPurchaseOrder")){
                return "";
            }
            return "disabled";
        },

        checkedMarketDomestic: function() {
            //console.log( 'checkedMarketDomestic: ', this.market );
            if ( this.market === 'Domestic') {
                return 'checked';
            }
        },

        checkedMarketInternational: function() {
            //console.log( 'checkedMarketInternational: ', this.market );
            if ( this.market === 'International') {
                return 'checked';
            }
        },

    });

} //: - Meteor.isClient
