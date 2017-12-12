import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import 'codemirror/mode/xml/xml'
@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {
    public currentCount = 0;
    private config: any;
    private content: any;
    public incrementCounter() {
        this.currentCount++;
    }
    constructor() {
        this.config = { lineNumbers: true, mode: 'xml' };
        this.content = `// ... some code !
                        package main

                        import "fmt"

                       // Send the sequence 2, 3, 4, ... to channel 'ch'.
                       func generate(ch chan<- int) {
	                   for i := 2; ; i++ {
		               ch <- i  // Send 'i' to channel 'ch'
	                  }
                     }`
    }

    ngOnInit(): void {

        let connection = new HubConnection('/message');

        connection.on('send', data => {
            console.log(data);
        });

        connection.start()
            .then(() => console.log('Connected'));
    }
}
