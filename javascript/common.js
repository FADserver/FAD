const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

$(document).ready(function(){
  $("#news-bar").load("../common/news-bar.html");
});

$(document).ready(function(){
  $("#header").load("../common/header.html");
});

$(document).ready(function(){
  $("#child2").load("../common/sidebar.html");
});

$(document).ready(function(){
  $("#child3").load("../common/sidebar.html");
});

$(document).ready(function(){
  $("#footer").load("../common/footer.html");
});