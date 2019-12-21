var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var OwlCarouselComponent = /** @class */ (function () {
    function OwlCarouselComponent() {
        this.owlcarousel1 = [
            { img: "assets/images/slider/1.jpg" },
            { img: "assets/images/slider/2.jpg" },
            { img: "assets/images/slider/3.jpg" },
            { img: "assets/images/slider/4.jpg" },
            { img: "assets/images/slider/5.jpg" },
            { img: "assets/images/slider/6.jpg" },
            { img: "assets/images/slider/7.jpg" },
            { img: "assets/images/slider/8.jpg" },
            { img: "assets/images/slider/9.jpg" },
            { img: "assets/images/slider/10.jpg" }
        ];
        //Options
        this.owlcarousel1Options = {
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        };
        this.owlcarousel2Options = {
            loop: true,
            margin: 10,
            items: 5,
            nav: false,
            responsive: {
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        };
        this.owlcarousel3Options = {
            center: true,
            items: 5,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        };
        this.owlcarousel4Options = {
            items: 5,
            loop: true,
            margin: 10,
            merge: true,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel5Options = {
            margin: 10,
            loop: true,
            autoWidth: true,
            items: 5,
            nav: false
        };
        this.owlcarousel6Options = {
            items: 5,
            loop: false,
            center: true,
            margin: 10,
            URLhashListener: true,
            autoplayHoverPause: true,
            startPosition: 'URLHash',
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel7Options = {
            stagePadding: 50,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel8Options = {
            stagePadding: 50,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel9Options = {
            rtl: true,
            loop: true,
            margin: 10,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel10Options = {
            items: 5,
            lazyLoad: true,
            loop: true,
            margin: 5,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel12Options = {
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items: 5,
            margin: 30,
            stagePadding: 30,
            smartSpeed: 450,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel13Options = {
            items: 5,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            nav: false,
            responsive: {
                576: {
                    items: 1,
                    mergeFit: true
                },
                768: {
                    items: 2,
                    mergeFit: true
                },
                992: {
                    items: 3,
                    mergeFit: true
                }
            }
        };
        this.owlcarousel14Options = {
            items: 1,
            margin: 10,
            autoHeight: true,
            nav: false
        };
    }
    OwlCarouselComponent.prototype.ngOnInit = function () { };
    OwlCarouselComponent = __decorate([
        Component({
            selector: 'app-owl-carousel',
            templateUrl: './owl-carousel.component.html',
            styleUrls: ['./owl-carousel.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], OwlCarouselComponent);
    return OwlCarouselComponent;
}());
export { OwlCarouselComponent };
//# sourceMappingURL=owl-carousel.component.js.map