export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    disabled: boolean;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

export let MyWorkersDatabase: MyWorker[] = [
    { id: 1, name: 'Иван', surname: 'Иванов', type: 0, disabled: true },
    { id: 2, name: 'Петр', surname: 'Петров', type: 1, disabled: true },
    { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, disabled: true },
    { id: 4, name: 'Василий', surname: 'Васильев', type: 3, disabled: true }
];