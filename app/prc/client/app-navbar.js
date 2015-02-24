// : - App Navbar

if (Meteor.isClient) {

    
    // : - events
    Template.appNavbar.events({

        'click #purchase-order': function(evt, tpl) {
            Session.set('purchaseOrderCursor', 0);
            Router.go('/purchaseOrder', {});
        },
        
    });

} //: - Meteor.isClient