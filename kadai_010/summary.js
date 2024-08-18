$(function () {
  // 文字色変化がクリックされたら
  $('#change-color').on('click', function() {
    // #targetの文字色を青色に変える
    $('#target').css('color','blue');
  });

  // 文字内容変化がクリックされたら
  $('#change-text').on('click', function() {
    // #targetのテキストを変える
    $('#target').text("Hello!");
  });

  // フェードアウトがクリックされたら
  $('#fade-out').on('click', function() {
    // #targetをフェードアウトする
    $('#target').fadeOut();
  });

  // フェードインがクリックされたら
  $('#fade-in').on('click', function() {
    // #targetをフェードインする
    $('#target').fadeIn();
  });
});