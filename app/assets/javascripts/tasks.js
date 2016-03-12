function masonry_start(content, item){
  $(content).masonry({
    itemSelector : item,
    columnWidth : 260,
    isAnimated : true,
    animationOptions: {
      duration: 600
    }
  });
}

function update_tasks(text){
  var showid = $(".task-content:visible").attr("id");
  $(".task-content").masonry('destroy');
  $("#js-task-content-wrap").html(text);
  masonry_start(".task-content", ".list-card-container");
  $(".task-content").hide();
  $("." + showid).show();
}

$(window).on("load", function() {
  $("li.task-nav-item-button").on("click", function() {
    $(".task-content").masonry('destroy');
    $("li.task-nav-item-button.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".task-content").hide();
    $("." + this.id).show();
    masonry_start(".task-content", ".list-card-container");
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
    $("#js-new-task-content").hide();
  });

  $("body").on("click", ".plus-image", function() {
    var type = this.id;
    $(".member-content").show();
  });

  masonry_start(".task-content", ".list-card-container");
  $(".task-content").hide();
  $(".doing").show();

});
