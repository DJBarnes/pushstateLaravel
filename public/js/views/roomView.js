window.RoomView = Backbone.View.extend({

  initialize : function(options) {
    this.options = options;
    this.template = Handlebars.compile(tpl.get(this.options.tabName));
  },
  
  render : function() {
    $(this.el).html(this.template());
    return this.el;
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