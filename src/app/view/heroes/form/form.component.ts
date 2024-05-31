import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

})
export class FormComponent implements OnInit {
  hero = { id: "1", name: "AA" };
  formGroup!: FormGroup;
  hide = true;

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      status: [false, Validators.required]
    });
  }
  submit() {
    if (this.formGroup.valid) {
      const user: User = {
        id: this.userService.getData().length + 1, // Genera un nuevo ID
        name: this.formGroup.value.name,
        lastName: this.formGroup.value.lastName,
        age: this.formGroup.value.age,
        status: this.formGroup.value.status
      };

      this.userService.addData(user);
      this.formGroup.reset();
    }
  }
}
export class FormFieldPrefixSuffixExample {
  hide = true;
  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
}