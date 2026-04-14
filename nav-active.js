(function () {
  var page = window.location.pathname.split('/').pop() || 'index.html';
  // Mark top-level nav link active
  document.querySelectorAll('nav .nav-item > a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('nav-active');
  });
  // If on a sub-page (verpackung, grafisch, spezialitaten), mark PRODUKTE active
  document.querySelectorAll('nav .dropdown a').forEach(function (a) {
    if (a.getAttribute('href') === page) {
      var parent = a.closest('.nav-item');
      if (parent) parent.querySelector(':scope > a').classList.add('nav-active');
    }
  });
})();
