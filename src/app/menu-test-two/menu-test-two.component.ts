import { Component, OnInit } from '@angular/core';
declare var wheelnav: any;
declare var slicePath: any;
declare var markerPath: any;
@Component({
  selector: 'app-menu-test-two',
  templateUrl: './menu-test-two.component.html',
  styleUrls: ['./menu-test-two.component.scss']
})
export class MenuTestTwoComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // let wheel = new wheelnav("wheelDiv");
    // wheel.slicePathFunction = slicePath().DonutSlice;
    // wheel.markerPathFunction = markerPath().PieLineMarker;
    // wheel.clickModeRotate = false;
    // wheel.markerEnable = true;
    // wheel.initWheel(["init", "create", "navigate", "refresh"]);
    // wheel.createWheel();
  //Use advanced constructor for more wheelnav on same div

let wheel1 = new wheelnav('wheelDiv', null, 300, 300);
let wheel2 = new wheelnav('wheelDiv2', null,600,600);

//Customize slicePaths for proper size
wheel1.slicePathFunction = slicePath().DonutSlice;
wheel1.slicePathCustom = slicePath().DonutSliceCustomization();
wheel1.slicePathCustom.minRadiusPercent = 0.3;
wheel1.slicePathCustom.maxRadiusPercent = 0.6;
wheel1.sliceSelectedPathCustom = wheel1.slicePathCustom;
wheel1.sliceInitPathCustom = wheel1.slicePathCustom;
// marker
wheel1.markerEnable = true;
wheel1.markerPathFunction = markerPath().PieLineMarker;
wheel2.slicePathFunction = slicePath().DonutSlice;
wheel2.slicePathCustom = slicePath().DonutSliceCustomization();
wheel2.slicePathCustom.minRadiusPercent = 0.6;
wheel2.slicePathCustom.maxRadiusPercent = 0.9;
wheel2.sliceSelectedPathCustom = wheel2.slicePathCustom;
wheel2.sliceInitPathCustom = wheel2.slicePathCustom;

//Disable rotation, set navAngle and create the menus
wheel1.clickModeRotate = false;
wheel2.clickModeRotate = false;
wheel2.navAngle = -30;
wheel1.createWheel(["1", "2", "3"]);
wheel2.createWheel(["1.1", "1.2", "2.1", "2.2", "3.1", "3.2"]);

//Add function to each main menu for show/hide sub menus
var main1selected = true;
wheel1.navItems[0].navigateFunction = function () {
    if (main1selected) {
        wheel2.navItems[0].navItem.hide();
        wheel2.navItems[1].navItem.hide();
    }
    else {
        wheel2.navItems[0].navItem.show();
        wheel2.navItems[1].navItem.show();
    }
    main1selected = !main1selected;
};
  }

}
