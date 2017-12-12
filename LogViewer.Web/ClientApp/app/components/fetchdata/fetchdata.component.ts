import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
            //for (var i = 0; i < this.forecasts.length; i++)
            //{
            //    this.forecasts[i].keys = [];
            //    for (var j = 0; j < Object.keys(this.forecasts[i]).length; j++)
            //    {
            //        this.forecasts[i].keys.push(this.forecasts[i][Object.keys(this.forecasts[i])[j]]);
            //    }
            //}
        }, error => console.error(error));
    }

}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
    //keys: any;
}
