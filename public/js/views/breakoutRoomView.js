window.BreakoutRoomView = Backbone.View.extend({
  initialize : function() {
    this.template = _.template(tpl.get('breakoutroom'));
  },
  
  render : function() {
    $('#tabsDiv').empty();
    $(this.el).html(this.template());
    $('#tabsDiv').html(this.el);
  },
  
  events : {
    'click .classroom' : 'navigateToClassroom',
    'click .computerclassroom':'navigateToComputerClassroom',
    'click .breakoutroom':'navigateToBreakoutRoom',
    'click .specialroom':'navigateToSpecialRoom'
  },
  
  navigateToClassroom : function() {
    app.navigate('classroom',true);
  },

  navigateToComputerClassroom : function() {
    app.navigate('computerclassroom',true);
  },

  navigateToBreakoutRoom : function() {
    app.navigate('breakoutroom',true);
  },

  navigateToSpecialRoom : function() {
    app.navigate('specialroom',true);
  }
});