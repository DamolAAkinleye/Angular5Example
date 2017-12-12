import { Component,OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Component({
    templateUrl: './frontlog.component.html',
    styleUrls: ['./frontlog.component.css']
})
export class FrontLogComponent implements OnInit {
    public forecasts: WeatherForecast[];
    private  previousLog:any;   
    private currentLog: any;  
    private router: Router;
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, router: Router) {
        this.router = router;
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];

        }, error => console.error(error));
    }
    ngOnInit(): void {

    }

 openLog(m) {
        m.show = !m.show;
        this.previousLog = this.currentLog;
        this.currentLog = m;
        if (this.previousLog != this.currentLog) {
            this.previousLog.show = false;
        }
    }

 openLogDetails() {
     console.log('ok')
     this.router.navigateByUrl('/frontlogdetails');
 }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

//export class FrontLogComponent implements OnInit {
//    array: number[] = [];
//    sum = 100;
//    throttle = 300;
//    scrollDistance = 1;
//    scrollUpDistance = 2;
//    direction = '';
//    title = 'Test';



//    public forecasts: WeatherForecast[];
//    private previousLog: any;
//    private currentLog: any;
//    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
//        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
//            this.forecasts = result.json() as WeatherForecast[];

//        }, error => console.error(error));
//        for (let i = 0; i < this.sum; ++i) {
//            this.array.push(i);
//        }
//    }
//    ngOnInit(): void {

//    }
//    onScrollDown() {
//        console.log('scrolled!!');

//        // add another 20 items
//        const start = this.sum;
//        this.sum += 20;
//        for (let i = start; i < this.sum; ++i) {
//            this.array.push(i);
//        }
//    }

//    openLog(m) {
//        m.show = !m.show;
//        this.previousLog = this.currentLog;
//        this.currentLog = m;
//        if (this.previousLog != this.currentLog) {
//            this.previousLog.show = false;
//        }
//    }

//}


