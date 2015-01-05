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
});

Router.route('/purchaseOrder/add', function () {
  this.render('purchaseOrderHome', {
    data: function() {
      Session.set('addPurchaseOrder', true);
      return new PurchaseOrder();
    }
  });
});

