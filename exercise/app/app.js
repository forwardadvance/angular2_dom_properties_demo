var AppComponent = ng.core
  .Component({
    selector: "app",
    template:``
  })
  .Class({
    constructor: function() {

    }
  });




document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent, []);
});


