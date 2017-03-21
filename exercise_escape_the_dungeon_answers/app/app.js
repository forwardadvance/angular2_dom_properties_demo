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

var locationModel = {
  name: "Nondescript Corridor",
  description: "It is very dark. To the north you can just make out a faint glimmer of golden light.",
  exits: {
    north:true
  }
}

var AppComponent = ng.core
  .Component({
    selector: 'app',
    template:
    `
      <ul>
        <li [hidden]="!location.exits.east">
          <button (click)="protagonist.moveEast()">East</button>
        </li>
        <li [hidden]="!location.exits.west">
          <button (click)="protagonist.moveWest()">West</button>
        </li>
        <li [hidden]="!location.exits.north">
          <button (click)="protagonist.moveNorth()">North</button>
        </li>
        <li [hidden]="!location.exits.south">
          <button (click)="protagonist.moveSouth()">South</button>
        </li>
      </ul>

      <h2>{{protagonist.name}}</h2>
      x: {{protagonist.x}}, y: {{protagonist.y}}
    `
  })
  .Class({
    constructor: function() {
      this.protagonist = heroModel;
      this.location = locationModel;
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


