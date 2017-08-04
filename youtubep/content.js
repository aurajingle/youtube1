
setTimeout(function(){
  console.log('yoo hoo');

  likelist = $(".style-text yt-formatted-string[aria-label]");

  a = likelist[0].getAttribute('aria-label');
  a.length;
  b = a.length - 6;
  likes = a.substr(0,b);
  flikes = parseFloat(a.replace(/,/g,''));

  c = likelist[1].getAttribute('aria-label');
  c.length;
  d = c.length - 9;
  dislikes = c.substr(0, d);
  fdislikes =parseFloat(c.replace(/,/g,''));

  x_like = flikes *100 /(flikes + fdislikes) ;
  console.log(x_like.toFixed(0)+'%');
  p_like = x_like.toFixed(0)+'%';

  element_like = $(".style-text yt-formatted-string");
  p_likehtml = "<span style='color: black'>" + p_like + "</span>";
  element_like[0].innerHTML += ' ' + p_likehtml;


  x_dislike = fdislikes * 100/(flikes + fdislikes);
  console.log(x_dislike.toFixed(0)+'%');
  p_dislike = x_dislike.toFixed(0)+'%';

  element_dislike = $(".style-text yt-formatted-string");
  p_dislikehtml = "<span style='color: black'>" + p_dislike + "</span>";
  element_dislike[1].innerHTML += ' ' +p_dislikehtml;
},2000);

//$(".style-text yt-formatted-string").innerHTML += ' hello';
