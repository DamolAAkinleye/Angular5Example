import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'codemirror/mode/xml/xml'
import { Router } from '@angular/router';

@Component({
    templateUrl: './sqleditor.component.html',
    styleUrls: ['./sqleditor.component.css']
})
export class SqlEditorComponent implements OnInit {
    private config: any;
    private content: any;
    private baserUrl: string;
    private http: Http;
    private sqlResult: any;
    private selectedQuery: any;
    private router: Router;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baserUrl = baseUrl;
        this.http = http;
        this.config = { lineNumbers: true, mode: 'xml' };
        this.content = 'SELECT * FROM ';
    }
    ngOnInit(): void {

 }

    fff(http: Http): void {

        this.http.get(this.baserUrl + 'SqlEditor/MultySelect?query=' + this.selectedQuery).subscribe(result => {
            this.sqlResult = result.json();
            console.log(this.sqlResult)
        }, error => console.error(error));
    }

    setSelected(instance, $event): void {
        this.selectedQuery=$event.instance.getSelection()
        //console.log(instance.getSelection());
    }

   

}



