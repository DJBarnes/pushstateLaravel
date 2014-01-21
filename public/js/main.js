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
    this.contentDiv.render();
  },

  computerclassroom : function() {
    //console.log("computer classroom");
    this.contentDiv = new ComputerClassroomView({});
    this.contentDiv.render();
  },

  breakoutroom : function() {
    //console.log("breakout room");
    this.contentDiv = new BreakoutRoomView({});
    this.contentDiv.render();
  },

  specialroom : function() {
    //console.log("special room");
    this.contentDiv = new SpecialRoomView({});
    this.contentDiv.render();
  }
});

tpl.loadTemplates(['classroom','computerclassroom','breakoutroom','specialroom'], function() {
  window.app = new AppRouter();
  var result = Backbone.history.start({pushState: true, root: "/pushstateTest/roomschedule/"});
});