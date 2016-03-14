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
  $taskContent = $(".task-content");
  var showid = $(".task-content:visible").attr("id");
  $taskContent.masonry('destroy');
  $("#js-task-content-wrap").html(text);
  masonry_start(".task-content", ".list-card-container");
  $taskContent.hide();
  $("." + showid).show();
}

$(window).on("load", function() {
  $taskContent = $(".task-content");
  $("li.task-nav-item-button").on("click", function() {
    $taskContent.masonry('destroy');
    $("li.task-nav-item-button.selected").removeClass("selected");
    $(this).addClass("selected");
    $taskContent.hide();
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
    $(".new-task-content").hide();
  });

  $("body").on("click", ".plus-image", function() {
    var type = this.id;
    $("#js-member-content").show();
  });

  masonry_start(".task-content", ".list-card-container");
  $taskContent.hide();
  $(".doing").show();

});
