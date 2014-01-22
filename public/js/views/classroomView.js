window.ClassroomView = Backbone.View.extend({

  initialize : function() {
    this.template = Handlebars.compile(tpl.get('classroomTab'));
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