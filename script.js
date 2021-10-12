console.clear();

//it doesn't get much easier than this ;)
const draggable = Draggable.create("#outer", {
  type: "rotation",
  inertia: true,
  onDrag: function() {

  }
});

$("#rotation").click(function() {
  console.log(gsap.getProperty("#outer", "rotation"), "from element");
  console.log(Draggable.get("#outer").rotation, "from the Draggable");
});

const draggable_2 = Draggable.create("#inner", {
  type: "rotation",
  inertia: true,
  onDrag: function() {

  }
});

$("#rotation").click(function() {

});

/*
More info on Club GreenSock and other bonus plugins
https://www.greensock.com/club
*/