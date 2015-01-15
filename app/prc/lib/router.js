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
  Session.set('addPurchaseOrder', false);
  Session.set('editPurchaseOrder', false);

  this.render('home', {
    data: function() {
        return { appVersion : '0.90' };
    }
  });
  
});

Router.route('/purchaseOrder', function () {
  Session.set('addPurchaseOrder', false);
  Session.set('editPurchaseOrder', false);

  this.render('purchaseOrderHome');

  this.render('purchaseOrderList', {
    to: 'purchaseOrderContent'
  });

});

Router.route('/purchaseOrder/add', function () {
  Session.set('addPurchaseOrder', true);
  Session.set('editPurchaseOrder', false);

  this.render('purchaseOrderHome', {
    data: function() {
      return {navbarHeader: 'Add'};
    }
  });

  this.render('purchaseOrderAdd', {
    to: 'purchaseOrderContent',
    data: function() {
      return new PurchaseOrder();
    }
  });

});

Router.route('/purchaseOrder/edit/:_id', function () {
  Session.set('addPurchaseOrder', false);
  Session.set('editPurchaseOrder', true);

  this.render('purchaseOrderHome', {
    data: function() {
      return {navbarHeader: 'Edit'};
    }
  });

  this.render('purchaseOrderEdit', {
    to: 'purchaseOrderContent',
    data: function() {
      //console.log('route - purchaseOrderEdit ', this.params._id)
      //console.log('route - purchaseOrderEdit ', PurchaseOrders.findOne({_id: this.params._id}))
      return PurchaseOrders.findOne({_id: this.params._id});
    }
  });

});

