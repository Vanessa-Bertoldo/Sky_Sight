import { Subject, takeUntil } from 'rxjs';
import { SkysightData } from './../../../../models/interfaces/skysight.interface';
import { SkysightService } from './../../services/skysight.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit, OnDestroy{
  Skysight!: SkysightData;
  private readonly destroy$: Subject<void> = new Subject();
  constructor(private skyservice : SkysightService) { }
  initialCityName = 'Belo Horizonte'
  searchIcon = faMagnifyingGlass

  ngOnInit() { //Aqui inserimos o código que será inicialiado junto ao componente
    this.getSkySight(this.initialCityName);
  }

  getSkySight(cityName: string): void{
    this.skyservice.get(cityName)
      .pipe(takeUntil(this.destroy$)) //o operador takeUntil é usado para interromper o fluxo quando determinada condição é satisfeita
      .subscribe({
        next: (response) => {
          response && (this.Skysight = response);
        },
        error: (error) => console.log(error)
      })
  }

  onSubmit() : void {
    this.getSkySight(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void { //chamado ao sair da tela; evento de destruição de um componente
      //Fazer isso evita o vazamento de memória
      this.destroy$.next();
      this.destroy$.complete();
  }
}
