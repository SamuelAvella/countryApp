import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor(private countriesSvc: CountriesService){}

  searchByCapital(term: string): void{
    this.countriesSvc.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries
      })
    
  }
}
