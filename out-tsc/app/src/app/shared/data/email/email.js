var Mail = /** @class */ (function () {
    function Mail() {
    }
    Mail.Emails = [
        {
            id: 1,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "pork@company.com",
            date: "15 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 2,
            image: "assets/images/user/2.png",
            name: "Lorm lpsa",
            email: "lpsa@company.com",
            date: "16 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: true
        },
        {
            id: 3,
            image: "assets/images/user/3.jpg",
            name: "Vincent Porter",
            email: "vincent@company.com",
            date: "17 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 4,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "vincent@company.com",
            date: "18 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 5,
            image: "assets/images/user/2.png",
            name: "Lorm lpsa",
            email: "Lion@company.com",
            date: "19 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 6,
            image: "assets/images/user/3.jpg",
            name: "Vincent Porter",
            email: "solvn@company.com",
            date: "20 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: true
        },
        {
            id: 7,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "soft@company.com",
            date: "21 Feb 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "trash",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 8,
            image: "assets/images/user/2.png",
            name: "Lorm lpsa",
            email: "lorapasoft23@company.com",
            date: "1 March 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "trash",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 9,
            image: "assets/images/user/3.jpg",
            name: "Vincent Porter",
            email: "vincent@company.com",
            date: "2 March 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "trash",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 10,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "vincent@company.com",
            date: "15 March 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "draft",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 11,
            image: "assets/images/user/2.png",
            name: "Lorm lpsa",
            email: "herry@company.com",
            date: "16 March 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "draft",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 12,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "john@company.com",
            date: "21 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "outbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: true
        },
        {
            id: 13,
            image: "assets/images/user/2.png",
            name: "Lorm lpsa",
            email: "deojoseph@company.com",
            date: "22 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "outbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 14,
            image: "assets/images/user/6.jpg",
            name: "Charlie Porter",
            email: "charle21@company.com",
            date: "23 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "unread",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 15,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 16,
            image: "assets/images/user/8.jpg",
            name: "Ross Singh",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: true
        },
        {
            id: 17,
            image: "assets/images/user/14.png",
            name: "Sam Porter",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: true
        },
        {
            id: 18,
            image: "assets/images/user/7.jpg",
            name: "Jenisha Trivedi",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 19,
            image: "assets/images/user/8.jpg",
            name: "Ross Singh",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 20,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 21,
            image: "assets/images/user/14.png",
            name: "Sam Porter",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "inbox",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 22,
            image: "assets/images/user/5.jpg",
            name: "Ashiyana Oza",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 23,
            image: "assets/images/user/6.jpg",
            name: "Charlie Porter",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 24,
            image: "assets/images/user/7.jpg",
            name: "Jenisha Trivedi",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "draft",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 25,
            image: "assets/images/user/8.jpg",
            name: "Ross Singh",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "draft",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 26,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "sent",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 27,
            image: "assets/images/user/14.png",
            name: "Sam Porter",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "spam",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 28,
            image: "assets/images/user/8.jpg",
            name: "Ross Singh",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "spam",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 29,
            image: "assets/images/user/9.jpg",
            name: "Hileri makr",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "spam",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 30,
            image: "assets/images/user/14.png",
            name: "Sam Porter",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "spam",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
        {
            id: 32,
            image: "assets/images/user/5.jpg",
            name: "Ashiyana Oza",
            email: "sam1254@company.com",
            date: "30 Apr 2019",
            cc: "Mattis luctus. Donec nisi diam,",
            type: "spam",
            text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
            favourite: false
        },
    ];
    return Mail;
}());
export { Mail };
//# sourceMappingURL=email.js.map