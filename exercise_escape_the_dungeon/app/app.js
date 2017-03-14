// Exercise - LLars Bunderchump

var heroModel = {
  name: "LLars Bunderchump",
  x: 0,
  y: 0,
  moveNorth: function() {
    this.x++;
  },
  moveSouth: function() {
    this.x--;
  },
  moveEast: function() {
    this.y--
  },
  moveWest: function() {
    this.y++
  }
}

var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
    `
      <ul>
        <li>
          <a (click)="protagonist.moveEast()">East</a>
        </li>
        <li>
          <a (click)="protagonist.moveWest()">West</a>
        </li>
        <li>
          <a (click)="protagonist.moveNorth()">North</a>
        </li>
        <li>
          <a (click)="protagonist.moveSouth()">South</a>
        </li>
      </ul>

      <h2>{{protagonist.name}}</h2>
      x: {{protagonist.x}}, y: {{protagonist.y}}
    `
  })
  .Class({
    constructor: function() {
      this.protagonist = heroModel;
    }
  });


/**
  * The App Module
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


