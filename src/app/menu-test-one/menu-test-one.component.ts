import { Component, OnInit } from '@angular/core';
declare var CMenu: any;
@Component({
  selector: 'app-menu-test-one',
  templateUrl: './menu-test-one.component.html',
  styleUrls: ['./menu-test-one.component.scss']
})
export class MenuTestOneComponent implements OnInit {
  // @ViewChild('myDiv')
  // myDiv!: ElementRef;

  constructor() { }

  ngOnInit(): void {

    const menu = CMenu("#menu1")
    .config({
      menus: [
      //   {
      //   title: "GitHub",
      //   icon: "fa fa-github",
      //   href: {
      //     url: "http://github.com",
      //     blank: true
      //   }
      // }, {
      //   title: "GitLab",
      //   icon: ["fa fa-gitlab", '#4078c0'],
      // },

      {
        title: "",
        icon: "fa-solid fa-house icon1 cm-icon ",
        menus: [{
          title: '',
          icon: 'fa-solid fa-user'
        },   {
          title: '',
          icon: 'fa-solid fa-location-dot'
        },   {
          title: '',
          icon: 'fa-solid fa-layer-group'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: ' fa fa-firefox'
        }]
      },
      {
        title: "",
        icon: "fa-solid fa-cloud icon1 cm-icon",
        menus: [{
          title: '',
          icon: 'fa-solid fa-user'
        },   {
          title: '',
          icon: 'fa-solid fa-location-dot'
        },   {
          title: '',
          icon: 'fa-solid fa-layer-group'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: ' fa fa-firefox'
        }]
      },
      {
        title: "",
        icon: "fa-solid fa-repeat icon1 cm-icon",
        menus: [{
          title: '',
          icon: 'fa-solid fa-user'
        },   {
          title: '',
          icon: 'fa-solid fa-location-dot'
        },   {
          title: '',
          icon: 'fa-solid fa-layer-group'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: ' fa fa-firefox'
        }]
      },

      {
        title: "",
        icon: "fa-solid fa-up-right-and-down-left-from-center icon1 cm-icon",
        menus: [{
          title: '',
          icon: 'fa-solid fa-user'
        },   {
          title: '',
          icon: 'fa-solid fa-location-dot'
        },   {
          title: '',
          icon: 'fa-solid fa-layer-group'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: 'fa fa-firefox'
        },{
          title: '',
          icon: 'fa fa-firefox'
        },
        {
          title: '',
          icon: ' fa fa-firefox'
        }]
      },



      // {
      //   title: "subMenu",
      //   icon: "my-icon icon2"
      // }, {
      //   title: "click",
      //   icon: "my-icon icon3"
      // }, {
      //   title: "hash-href",
      //   href: "#someHash"
      // }, {
      //   title: "clickMe!",
      //   click: function() {
      //     alert('click event callback');
      //   }
      // }, {
      //   disabled: true,
      //   title: "disabled"
      // }
    ]
    });
    menu.show([350, 350]);

  }






}
