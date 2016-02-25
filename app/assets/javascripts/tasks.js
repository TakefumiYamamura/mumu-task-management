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
  $("body").on("click", "#wrap.cover-view", function() {
    $(this).removeClass('cover-view');
    $(".edit-task-content").hide();
    $(".new-task-content").hide();
  });
  $("body").on("click", ".plus-image", function() {
    var type = this.id;
    $(".member-content").show();
  });
  $(".task-content").masonry({
        itemSelector : '.list-card-container',
        columnWidth : 260,
        isAnimated : true,
        animationOptions: {
            duration: 600
        }
    });

});
