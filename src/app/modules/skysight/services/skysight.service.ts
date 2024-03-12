import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ //dizemos que a classe pode ser injetada a um componente
  providedIn: 'root'
})
export class SkysightService {
  private apiKey = '598453c10d74ed12b7f49e275be64bf6';

  constructor(
    private http: HttpClient //o servico esta sendo injetado na classe
    ) { }

  get(cityName : string) : Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
    {});
  }
}
