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
var Swal = require('sweetalert2');
var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.ngOnInit = function () { };
    // Basic Alert
    SweetAlertComponent.prototype.basicAlert = function () {
        Swal.fire('Any fool can use a computer');
    };
    // Alert Title
    SweetAlertComponent.prototype.withTitle = function () {
        Swal.fire('The Internet?', 'That thing is still around?', 'question');
    };
    // Alert with Image
    SweetAlertComponent.prototype.withImage = function () {
        Swal.fire({ imageUrl: './assets/images/endless-logo.png', imageHeight: 65, imageAlt: 'A Endless Logo' });
    };
    // A modal with a title, an error icon, a text, and a footer
    SweetAlertComponent.prototype.error = function () {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
        });
    };
    // A warning
    SweetAlertComponent.prototype.warning = function () {
        Swal.fire({
            type: 'warning',
            title: 'Warning',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    };
    // A warning
    SweetAlertComponent.prototype.success = function () {
        Swal.fire({
            type: 'success',
            title: 'Success',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    };
    // Info
    SweetAlertComponent.prototype.info = function () {
        Swal.fire({
            type: 'info',
            title: 'Info',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    };
    // Danger
    SweetAlertComponent.prototype.danger = function () {
        Swal.fire({
            type: 'error',
            title: 'Danger',
            text: 'You clicked the button!',
            showConfirmButton: true,
        });
    };
    // Custom HTML description and buttons with ARIA labels
    SweetAlertComponent.prototype.customHTML = function () {
        Swal.fire({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html: 'You can use <b>bold text</b>, ' +
                '<a href="//github.com">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        });
    };
    // custom position
    SweetAlertComponent.prototype.customPosition = function () {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        });
    };
    // Custom animation
    SweetAlertComponent.prototype.customAnimation = function () {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            animation: false,
            customClass: 'animated tada'
        });
    };
    // A Custom animation
    SweetAlertComponent.prototype.customAlert = function () {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 100,
            background: '#fff url(./assets/images/coming-soon-bg.jpg)',
            backdrop: "\n            rgba(20, 72, 72, 0.48)\n            center left\n            no-repeat\n          ",
            customClass: 'text-dark'
        });
    };
    // A warning message, with a function attached to the "Confirm"-button...
    SweetAlertComponent.prototype.withConfirmation = function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    // A warning message, with a function attached to the "Confirm"-button and by passing a parameter, you can execute something else for "Cancel".
    SweetAlertComponent.prototype.withCancelled = function () {
        var swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
            else if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    // A message with auto close timer
    SweetAlertComponent.prototype.autoClose = function () {
        var timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.',
            timer: 2000,
            onBeforeOpen: function () {
                Swal.showLoading();
                timerInterval = setInterval(function () {
                    Swal.getContent().querySelector('strong')
                        .textContent = Swal.getTimerLeft();
                }, 100);
            },
            onClose: function () {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (
            // Read more about handling dismissals
            result.dismiss === Swal.DismissReason.timer) {
            }
        });
    };
    // A Ajax request example
    SweetAlertComponent.prototype.withAjax = function () {
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: function (login) {
                return fetch("//api.github.com/users/" + login)
                    .then(function (response) {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return response.json();
                })
                    .catch(function (error) {
                    Swal.showValidationMessage("Request failed: " + error);
                });
            },
            allowOutsideClick: function () { return !Swal.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: result.value.login + "'s avatar",
                    imageUrl: result.value.avatar_url
                });
            }
        });
    };
    // Chaining modals (queue) example
    SweetAlertComponent.prototype.stepsAlert = function () {
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]).then(function (result) {
            if (result.value) {
                Swal.fire({
                    title: 'All done!',
                    html: 'Your answers: <pre><code>' +
                        JSON.stringify(result.value) +
                        '</code></pre>',
                    confirmButtonText: 'Lovely!'
                });
            }
        });
    };
    // Dynamic queue example
    SweetAlertComponent.prototype.dynamicQueue = function () {
        var ipAPI = 'https://api.ipify.org?format=json';
        Swal.queue([{
                title: 'Your public IP',
                confirmButtonText: 'Show my public IP',
                text: 'Your public IP will be received ' +
                    'via AJAX request',
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    return fetch(ipAPI)
                        .then(function (response) { return response.json(); })
                        .then(function (data) { return Swal.insertQueueStep(data.ip); })
                        .catch(function () {
                        Swal.insertQueueStep({
                            type: 'error',
                            title: 'Unable to get your public IP'
                        });
                    });
                }
            }]);
    };
    //RTL Alert
    SweetAlertComponent.prototype.rtlAlert = function () {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            type: 'question',
            customClass: {
                icon: 'swal2-arabic-question-mark'
            },
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
        });
    };
    //alter close after particular time
    SweetAlertComponent.prototype.customTimer = function () {
        var timerInterval;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <strong></strong> seconds.<br/><br/>' +
                '<button id="increase" class="btn btn-warning">' +
                'I need 5 more seconds!' +
                '</button><br/>' +
                '<button id="stop" class="btn btn-danger">' +
                'Please stop the timer!!' +
                '</button><br/>' +
                '<button id="resume" class="btn btn-success" disabled>' +
                'Phew... you can restart now!' +
                '</button><br/>' +
                '<button id="toggle" class="btn btn-primary">' +
                'Toggle' +
                '</button>',
            timer: 10000,
            onBeforeOpen: function () {
                var content = Swal.getContent();
                var $ = content.querySelector.bind(content);
                var stop = $('#stop');
                var resume = $('#resume');
                var toggle = $('#toggle');
                var increase = $('#increase');
                Swal.showLoading();
                function toggleButtons() {
                    stop.disabled = !Swal.isTimerRunning();
                    resume.disabled = Swal.isTimerRunning();
                }
                stop.addEventListener('click', function () {
                    Swal.stopTimer();
                    toggleButtons();
                });
                resume.addEventListener('click', function () {
                    Swal.resumeTimer();
                    toggleButtons();
                });
                toggle.addEventListener('click', function () {
                    Swal.toggleTimer();
                    toggleButtons();
                });
                increase.addEventListener('click', function () {
                    Swal.increaseTimer(5000);
                });
                timerInterval = setInterval(function () {
                    Swal.getContent().querySelector('strong')
                        .textContent = (Swal.getTimerLeft() / 1000)
                        .toFixed(0);
                }, 100);
            },
            onClose: function () {
                clearInterval(timerInterval);
            }
        });
    };
    SweetAlertComponent = __decorate([
        Component({
            selector: 'app-sweet-alert',
            templateUrl: './sweet-alert.component.html',
            styleUrls: ['./sweet-alert.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());
export { SweetAlertComponent };
//# sourceMappingURL=sweet-alert.component.js.map