import { Actor, AnswersQuestions, PerformsTasks, UsesAbilities } from './actor';

export interface Task extends Activity {
    performAs(actor: PerformsTasks): PromiseLike<void>;
}

export interface FunctionalPerformable {
    (actor: PerformsTasks, ...args: any[]): PromiseLike<void>;
}

export interface Interaction extends Activity {
    performAs(actor: UsesAbilities & AnswersQuestions): PromiseLike<void>;
}

export interface Activity {
    performAs<T extends Actor>(actor: T): PromiseLike<void>;
}

export type Attemptable = Activity | FunctionalPerformable;

export function isPerformable(attemptable: Attemptable): attemptable is Activity {
    return (<Performable> attemptable).performAs !== undefined;
}
