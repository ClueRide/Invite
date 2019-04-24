import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, RequiredValidator} from "@angular/forms";
import {TeamView} from "../../pages/home/home";

/**
 * Generated class for the TeamNameFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'team-name-form',
  templateUrl: 'team-name-form.html'
})
export class TeamNameFormComponent {

  @Output() teamName: EventEmitter<string>;

  teamNameForm: FormGroup;
  team: TeamView;

  constructor(
    formBuilder: FormBuilder,
  ) {
    console.log('Hello TeamNameFormComponent Component');
    this.teamName = new EventEmitter<string>();
    this.teamNameForm = formBuilder.group({
        'teamName': ['', [RequiredValidator]]
      }
    );
  }

  submitForm(): void {
    let teamName = this.teamNameForm.controls['teamName'].value;
    console.log('submitted new team name: ', teamName);
    this.teamName.emit(teamName);
  }

}
