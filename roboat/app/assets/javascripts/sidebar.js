function openSidebar(){
  $("#wrapper").toggleClass("toggled");
  $("#wrapper").toggleClass("overflow-hidden");
  $("#sidebar-wrapper").toggleClass("padding-30");
  if ($("#menu-icon").hasClass("glyphicon-menu-hamburger")) {
    $("#menu-icon").removeClass("glyphicon-menu-hamburger").toggleClass("glyphicon-remove");
  } else {
    $("#menu-icon").removeClass("glyphicon-remove").toggleClass("glyphicon-menu-hamburger");
  }
}

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  openSidebar();
});

openSidebar();
