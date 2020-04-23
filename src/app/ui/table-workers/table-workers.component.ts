import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {

  myWorkerType = MyWorkerType;

  @Input() title: string;
  @Input() workers: MyWorker[] = [];
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() editWorker = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

  onEditWorker(worker: MyWorker) {
    if (worker.disabled)
      worker.disabled = false;
  }

  onSaveWorker(e: any, worker: MyWorker) {
    worker.name = worker.name.replace(/\s+/g, '');
    worker.surname = worker.surname.replace(/\s+/g, '');
    if (worker.name.length > 0 && worker.surname.length > 0) {
      e.target.disabled = true;
      worker.disabled = true;
      console.log(worker);
    } else
      alert('Проверьте правильность введенных данных');
  }

}
