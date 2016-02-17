$(window).on("load", function() {
  $("li.task-nav-item-button").on("click", function() {
    $("li.task-nav-item-button.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".task-content").hide();
    $("." + this.id).show();
  });
});
