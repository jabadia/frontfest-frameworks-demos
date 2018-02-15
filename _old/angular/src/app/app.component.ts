import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-main',
	template: `
	<p>Hello, {{greeting}}</p>
	(counter: {{counter}})
	(doubleCounter: {{doubleCounter}})
	(tripleCounter: {{tripleCounter}})
	(unrelated: {{unrelated}})
	<button (click)="increment()">increment</button>
	<button (click)="incrementUnrelated()">increment unrelated</button>
	`
})
export class AppComponent {

	greeting = 'World';
	counter = 0;
	doubleCounter = 0;
	tripleCounter = 0;
	unrelated = 0;

	increment() {
		console.log('incrementing');
		this.counter += 1;
		this.doubleCounter = this.counter * 2;			// reactivo?
		this.tripleCounter = this.doubleCounter * 3;
	}

	incrementUnrelated() {
		console.log('incrementing unrelated');
		this.unrelated += 100;
	}
}