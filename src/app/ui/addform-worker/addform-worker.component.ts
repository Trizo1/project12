import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  mask = ['8', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  workerForm: FormGroup;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit() {
    this.workerForm = this.getFormGroup(null, null, null, null);
  }

  onAddWorker() {
    let worker: MyWorker = {
      name: this.workerForm.value.name,
      surname: this.workerForm.value.surname,
      type: this.workerForm.value.type,
      phone: this.workerForm.value.phone
    };
    worker.phone = worker.phone.replace(/\D/g, '');
    if (worker.phone.length == 11) {
      worker.workerForm = this.getFormGroup(worker.name, worker.surname, worker.type, worker.phone);
      worker.workerForm.disable();
      this.addWorker.emit(worker);
      this.workerForm.reset();
    } else
      alert('Проверьте правильность введенных данных');
  }

  checkWorker(name: string, surname: string, phone: string) {
    if (name.length > 0 && surname.length > 0 && phone.length == 11) {
      return true;
    }
    else {
      alert('Проверьте правильность введенных данных');
      return false;
    }
  }

  getFormGroup(name: string, surname: string, type: MyWorkerType, phone: string) {
    return new FormGroup({
      name: new FormControl(name, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
      surname: new FormControl(surname, [Validators.required, Validators.pattern('[а-яА-ЯёЁa-zA-Z]+')]),
      type: new FormControl(type, [Validators.required,]),
      phone: new FormControl(phone, [Validators.required,]),
    });
  }
}
