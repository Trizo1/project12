import { FormGroup } from '@angular/forms';

export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone: string;
    workerForm?: FormGroup;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let MyWorkersDatabase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', type: 0, phone: '88005553535' },
    { id: 2, name: 'Петр', surname: 'Петров', type: 1, phone: '89155263214' },
    { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, phone: '89123456789' },
    { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phone: '89002031563' }
];