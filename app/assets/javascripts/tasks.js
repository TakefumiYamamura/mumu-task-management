$(window).on("load", function() {
  $("li.task-nav-item-button").on("click", function() {
    $("li.task-nav-item-button.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".task-content").hide();
    $("." + this.id).show();
  });
  $("body").on("click", ".edit-task", function() {
    var type = this.id;
    $(".edit-task").show();
    $(".task-form-control").addClass("hidden-form")
    $(".hide-" + type).hide();
    $(".task-form-" + type).removeClass("hidden-form")
    $(".content-" + type).append("<input type='submit' value='Save' class='btn btn-primary task-form-control'>");
  });

});
