import { StepperOptions } from './../../node_modules/@angular/cdk/stepper/stepper.d';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { ShepherdService } from 'angular-shepherd';
// import { steps as defaultSteps, defaultStepOptions} from '../data';
import {MatIconModule} from '@angular/material/icon';
import Step from 'shepherd.js/src/types/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'myapp';
  api = environment.urlApi;
  token = environment.iapClientId;

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
      }
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
            on: 'bottom'
          },
          beforeShowPromise: function() {
            return new Promise(function(resolve) {
              setTimeout(function() {
                window.scrollTo(0, 0);
              }, 500);
            });
          },
          buttons: [
            {
              classes: 'shepherd-button-secondary',
              text: 'Exit',
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
            },
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
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

  // ngAfterViewInit() {
  //   this.shepherdService.defaultStepOptions = this.getDefaultOptions();
  //   this.shepherdService.modal = true;
  //   this.shepherdService.confirmCancel = false;
  //   this.shepherdService.addSteps(this.getDefaultSteps());
  //   this.shepherdService.start();
  // }

}
