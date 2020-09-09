// const story = document.querySelectorAll(".story");
// const loadMore = document.querySelectorAll("#loadMore");

// function loadMoreBtn() {
//   if (story.classList)
// }



$(document).ready(function(){
    $("#story").slice(0, 8).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $("#story:hidden").slice(0, 8).slideDown();
      if($("#story:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })