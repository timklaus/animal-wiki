$(document).ready(function() {
  var chosen = $("input:radio[name=warrior]:checked").val();
  var chosen2 = document.querySelector('input[name="warrior"]:checked').val();
  debugger
  console.log(chosen);
  console.log(chosen2);
  if (chosen == "jarcat") {
    $("#jarcat").show();
    }  else if (chosen == "businesshedgehog") {
      $("#businesshedgehog").show();
    } else if (chosen == "wallcat") {
      $("#wallcat").show();
    } else { (alert("Yep, still broken."));
  }

});

