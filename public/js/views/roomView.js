window.RoomView = Backbone.Marionette.ItemView.extend({

  initialize : function(options) {
    this.options = options || {};
    this.template = Handlebars.compile(tpl.get(this.options.tabName));
  },
  
  events : {
    'click .classroom' : 'navigateToClassroom',
    'click .computerclassroom':'navigateToComputerClassroom',
    'click .breakoutroom':'navigateToBreakoutRoom',
    'click .specialroom':'navigateToSpecialRoom'
  },
  
  navigateToClassroom : function() {
    RoomTabsMVC.navigate('classroom',true);
  },

  navigateToComputerClassroom : function() {
    RoomTabsMVC.navigate('computerclassroom',true);
  },

  navigateToBreakoutRoom : function() {
    RoomTabsMVC.navigate('breakoutroom',true);
  },

  navigateToSpecialRoom : function() {
    RoomTabsMVC.navigate('specialroom',true);
  }
});