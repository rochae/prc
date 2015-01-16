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
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', false);

  this.render('home', {
    data: function() {
        return { appVersion : '0.90' };
    }
  });
  
});

Router.route('/purchaseOrder', function () {
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', false);

  this.render('purchaseOrderHome');

});

Router.route('/purchaseOrder/add', function () {
  Session.set('addPurchaseOrder',  true);
  Session.set('editPurchaseOrder', false);

  this.render('purchaseOrderAdd', {
    data: function() {
      return new PurchaseOrder();
    }
  });

});

Router.route('/purchaseOrder/edit/:_id', function () {
  Session.set('addPurchaseOrder',  false);
  Session.set('editPurchaseOrder', true);

  this.render('purchaseOrderEdit', {
    data: function() {
      return PurchaseOrderCollection.findOne({_id: this.params._id});
    }
  });

});

