Router.configure({
    layoutTemplate: 'appLayout',
    notFoundTemplate: 'notFound',

    // : - Uncommend when data subscription is done.
    /* -- 
    waitOn: function() {
        return [
          Meteor.subscribe('publicLists'),
          Meteor.subscribe('privateLists')
        ];
    },
    -- */

});

Router.route('/', function () {

  this.render('home', {
    data: function() {
        return { appVersion : '0.90' };
    }
  });
  
});

Router.route('/purchaseOrder', function () {

  this.render('purchaseOrderHome');

  this.render('purchaseOrderList', {to: 'purchaseOrderContent'});

});

Router.route('/purchaseOrder/add', function () {

  this.render('purchaseOrderHome', {
    data: function() {
      return {navbarHeader: ' / Add'};
    }
  });

  this.render('purchaseOrderAdd', {
    to: 'purchaseOrderContent',
    data: function() {
      Session.set('addPurchaseOrder', true);
      return new PurchaseOrder();
    }
  });

});

