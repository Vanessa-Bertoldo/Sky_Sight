import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { SkysightData } from 'src/app/models/interfaces/skysight.interface';

@Component({
  selector: 'app-skysight-card',
  styleUrls: [],
  templateUrl: './skysight-card.component.html',
})
export class SkysightCardComponent {
  //Dados da previsão do tempo recebido pelo componente pai
  @Input() skysightDatasInput!: SkysightData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon       = faDroplet;
  windIcon           = faWind;
}
