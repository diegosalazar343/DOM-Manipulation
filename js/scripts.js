$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul").prepend("<li>Meow!</li>");
  });

  $("button#bark").click(function() {
    $("ul").prepend("<li>Hey dog bark</li>");
  });
});
