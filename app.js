var $ = function (id) {
  return document.getElementById(id);
}

var joinList = function () {
  alert('Join List Function is in process');
}

var changeValue = function () {
  alert('You have changed the value');
}

window.onload = function () {
  $('join_list').onclick = joinList;
  $('email_address').onchange = changeValue;
}
