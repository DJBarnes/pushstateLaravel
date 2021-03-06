Backbone.View.prototype.close = function() {
  console.log('Closing view ' + this);
  if (this.beforeClose) {
    this.beforeClose();
  }
  this.remove();
  this.unbind();
};

var AppRouter = Backbone.Router.extend({
  initialize : function() {
    this.contentDiv = new ClassroomView({el:"#tabsDiv"});
  },

  routes : {
    "classroom" : "classroom",
    "computerclassroom" : "computerclassroom",
    "breakoutroom" : "breakoutroom",
    "specialroom" : "specialroom",
  },

  classroom : function() {
    //console.log("classroom");
    this.contentDiv = new ClassroomView({});
    $('#tabsDiv').html(this.contentDiv.render());
  },

  computerclassroom : function() {
    //console.log("computer classroom");
    this.contentDiv = new ComputerClassroomView({});
    $('#tabsDiv').html(this.contentDiv.render());
  },

  breakoutroom : function() {
    //console.log("breakout room");
    this.contentDiv = new BreakoutRoomView({});
    $('#tabsDiv').html(this.contentDiv.render());
  },

  specialroom : function() {
    //console.log("special room");
    this.contentDiv = new SpecialRoomView({});
    $('#tabsDiv').html(this.contentDiv.render());
  }
});

tpl.loadTemplates(['classroomTab','computerclassroomTab','breakoutroomTab','specialroomTab'], function() {
  window.app = new AppRouter();
  var result = Backbone.history.start({pushState: true, root: "/pushstateTest/roomschedule/", silent:true});
});