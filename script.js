$(document).ready(function() {
  // Initialize Localizejs
  !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);

  Localize.initialize({
    key: 'jwfTGgB1vDG0b',
    rememberLanguage: true,
    translateMetaTags: true
  });
  //

  var startLang = Localize.getLanguage();

  if (startLang === 'en') {
    $('#lang-en').hide();
  }
  else {
    $('#lang-ja').hide();
  }


  $('#lang-ja').click(function() {
    toggleLang();
    Localize.setLanguage('ja');
  });

  $('#lang-en').click(function() {
    toggleLang();
    Localize.setLanguage('en');
  });

  function toggleLang() {
    $('#lang-en').toggle();
    $('#lang-ja').toggle();
  }

});