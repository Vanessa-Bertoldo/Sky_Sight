import { SkysightData } from './../../../../models/interfaces/skysight.interface';
import { SkysightService } from '../../services/skysight.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-skysight',
  templateUrl: './skysight.component.html',
  styleUrls: []
})
export class SkysightComponent implements OnInit, OnDestroy{
  constructor(private skysight : SkysightService){}

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Belo Horizonte';
  searchIcon = faMagnifyingGlass;
  skysightData!: SkysightData;

  ngOnInit(): void {

  }

  // Método chamado quando o componente está prestes a ser destruído, ou seja, removido do DOM, isso pode ocorrer devido a navegação para fora do componente ou fechamento do aplicativo
  ngOnDestroy(): void {
    // Emite um sinal para informar aos observadores que devem parar de escutar
    this.destroy$.next();
    // Marca o observável como completo, indicando que não haverá mais eventos emitidos
    this.destroy$.complete();
  }


  onSubmit(): void {
    this.getSkysightDatas(this.initialCityName);
    this.initialCityName = '';
  }

  // Método para obter dados do Skysight com base no nome da cidade
  getSkysightDatas(cityName: string): void {
    this.skysight
      .get(cityName) // Chamada do método 'get' do serviço Skysight
      .pipe(takeUntil(this.destroy$)) // Encadeamento de operadores para cancelar a assinatura quando o componente é destruído
      .subscribe({ // Início da subscrição para receber a resposta do serviço
        next: (response) => { // Função chamada quando a resposta é recebida com sucesso
          response && (this.skysightData = response); // Atribui a resposta aos dados do Skysight, se houver resposta
          console.log(this.skysightData);
        },
        error: (error) => console.error(error) // Função chamada em caso de erro durante a solicitação
      });
  }

}
