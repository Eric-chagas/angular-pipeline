import { Component } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
import Step from 'shepherd.js/src/types/step';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor(
    private shepherdService: ShepherdService
  ) {
    this.shepherdService.defaultStepOptions = {
      classes: 'custom-class-name-1 custom-class-name-2',
      scrollTo: false,
      cancelIcon: {
        enabled: true
      }
    };
  }

  ngOnInit(): void {
    console.log('hey')
  }

  getDefaultOptions() {
    const options = {
      classes: 'custom-class-name-1 custom-class-name-2',
      scrollTo: false,
      cancelIcon: {
        enabled: true
      },
      modal: true
    };

    return options;
  }

  getDefaultSteps() {
    const steps: Array<Step.StepOptions> =
      [
        {
          id: 'intro',
          attachTo: {
            element: '#step1',
            on: 'bottom',
          },
          // beforeShowPromise: function() {
          //   return new Promise(function(resolve) {
          //     setTimeout(function() {
          //       window.scrollTo(0, 0);
          //     }, 500);
          //   });
          // },
          buttons: [
            {
              classes: 'shepherd-button-secondary',
              text: 'Exit',
              action: () => {
                this.shepherdService.cancel();
              },
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              action: () => {
                this.shepherdService.back();
              },
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              action: () => {
                this.shepherdService.next();
              },
            }
          ],
          cancelIcon: {
            enabled: true
          },
          classes: 'custom-class-name-1 custom-class-name-2',
          highlightClass: 'highlight',
          scrollTo: false,
          title: 'Welcome to Angular-Shepherd!',
          text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
          when: {
            show: () => {
              console.log('show step');
            },
            hide: () => {
              console.log('hide step');
            }
          }
        },
        {
          id: 'intro',
          attachTo: {
            element: '#step2',
            on: 'bottom',
          },
          // beforeShowPromise: function() {
          //   return new Promise(function(resolve) {
          //     setTimeout(function() {
          //       window.scrollTo(0, 0);
          //     }, 500);
          //   });
          // },
          buttons: [
            {
              classes: 'shepherd-button-secondary',
              action: () => {
                this.shepherdService.cancel();
              },
              text: 'Exit',
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              action: () => {
                this.shepherdService.back();
              },
            },
            {
              classes: 'shepherd-button-primary',
              text: '<mat-icon>home</mat-icon> Próximo',
              action: () => {
                this.shepherdService.complete();
              },
            }
          ],
          cancelIcon: {
            enabled: true
          },
          classes: 'custom-class-name-1 custom-class-name-2',
          highlightClass: 'highlight',
          scrollTo: false,
          title: 'Welcome to Angular-Shepherd!',
          text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
          when: {
            show: () => {
              console.log('show step');
            },
            hide: () => {
              console.log('hide step');
            }
          }
        },
      ];

    return steps;
  }

  initiateOnboarding() {
    this.shepherdService.defaultStepOptions = this.getDefaultOptions();
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(this.getDefaultSteps());
    this.shepherdService.start();
  }

}
