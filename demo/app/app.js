// Property [Square Brace] Bindings

// Angular 2 works with DOM attributes, which are not the same as HTML attributes
// value is initialised from an attribute
// src
// disabled
// textContent
// hidden
// bind syntax
// style.color
// <a on-click="x=!x" [textContent]="x ? 'show': 'hide'">Swap</a>{{x}}
// <td [attr.colspan]="2+2">hello</td>
// <td [attr.fdsfdsfds]="2+2">hello</td>


// <input
//   on-input="value = $event.target.value"
//   [value]='value'
//   />
// <br />
// <button
//   [disabled]='!value'>
//     Click me!
// </button>
// <div
//   [hidden]="false"
//   [style.color]='value'>
//     {{value}}!
// </div>
var AppComponent = ng.core
  .Component({
    selector: "app",
    template:
    `
      <a (click)="hidden = !hidden">Show</a>
      <p [hidden]="hidden"
        [innerText]='value'
        [style.color]="value">
          Hello!</p>

      <input
        (input)="value = $event.target.value"
        [value]="value"
        />

      <button [disabled]="!value">Submit</button>

      <td [attr.hfdshgfdhgfhgfd]="2">hello</td>
    `
  })
  .Class({
    constructor: function() {
      this.hidden = false
      this.value = "green";
      // this.color = 'red'
      // this.href = 'http://www.google.co.uk'
      // this.getHref = function() {
      //   return  'abc123'
      // }
    }
  })




/**
  * Next add the component to a module
  */
var AppModule =
  ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
  })
  .Class({
    constructor: function() {}
  });


/**
  * Finally bootstrap
  */
ng.platformBrowserDynamic
  .platformBrowserDynamic()
  .bootstrapModule(AppModule);

// <a on-click="isHidden=!isHidden" [textContent]="isHidden ? 'show': 'hide'">Swap</a>
// <div [style.color]="color" [hidden]="isHidden">Hello there</div>
// <input [disabled]="true" />
// <div [textContent]="'Hello from the textContent'">Hello</div>

// Initial State
// var AppComponent = ng.core
//   .Component({
//     selector: "app",
//     template:
//     `

//     `
//   })
//   .Class({
//     constructor: function() {
//       var vm = this;
//       vm.x = false;
//     }
//   })

// document.addEventListener('DOMContentLoaded', function() {
//   ng.platform.browser.bootstrap(AppComponent, [])
// });



