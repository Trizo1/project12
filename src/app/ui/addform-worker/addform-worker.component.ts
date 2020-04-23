import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  name: string;
  surname: string;
  type = 0;
  myWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker() {
    let worker: MyWorker = {
      name: this.name.replace(/\s+/g, ''),
      surname: this.surname.replace(/\s+/g, ''),
      type: this.type,
      disabled: true,
    };
    if (typeof worker.name !== 'undefined' && typeof worker.surname !== 'undefined') {
      if (this.checkWorker(worker.name, worker.surname))
        this.addWorker.emit(worker);
    } else
      alert('Проверьте правильность введенных данных');
  }

  checkWorker(name: string, surname: string) {
    if (name.length > 0 && surname.length > 0) {
      return true;
    }
    else {
      alert('Проверьте правильность введенных данных');
      return false;
    }
  }

}
