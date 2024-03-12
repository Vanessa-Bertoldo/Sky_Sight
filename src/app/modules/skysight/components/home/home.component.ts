import { SkysightData } from './../../../../models/interfaces/skysight.interface';
import { SkysightService } from './../../services/skysight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  Skysight!: SkysightData;
  constructor(private skyservice : SkysightService) { }

  ngOnInit() { //Aqui inserimos o código que será inicialiado junto ao componente
    const initialCityName = 'Belo Horizonte'
    this.getSkySight(initialCityName);
  }

  getSkySight(cityName: string): void{
    this.skyservice.get(cityName)
      .subscribe({
        next: (response) => {
          response && (this.Skysight = response);
        },
        error: (error) => console.log(error)
      })
  }
}
