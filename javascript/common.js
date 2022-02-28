const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

$(document).ready(function(){
  $("#news-bar").load("https://fadserver.github.io/FAD/common/news-bar.html");
});

$(document).ready(function(){
  $("#header").load("https://fadserver.github.io/FAD/common/header.html");
});

$(document).ready(function(){
  $("#child2").load("https://fadserver.github.io/FAD/common/sidebar.html");
});

$(document).ready(function(){
  $("#child3").load("https://fadserver.github.io/FAD/common/sidebar.html");
});

$(document).ready(function(){
  $("#footer").load("https://fadserver.github.io/FAD/common/footer.html");
});