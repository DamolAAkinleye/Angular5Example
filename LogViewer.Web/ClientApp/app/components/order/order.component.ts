import { Component,OnInit,Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    public forecasts: WeatherForecast[];
    private  previousOrder:any;   
    private  currentOrder:any;  
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];

        }, error => console.error(error));
    }
    ngOnInit(): void {

    }

    openOrder(m) {
        m.show = !m.show;
        this.previousOrder = this.currentOrder;
        this.currentOrder = m;
        if (this.previousOrder != this.currentOrder) {
            this.previousOrder.show = false;
        }
    }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

