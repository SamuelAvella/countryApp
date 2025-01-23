import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,
  
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries: Country[] = []

  constructor(private countriesSvc: CountriesService){}

  searchByCountry(term: string): void{
    this.countriesSvc.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries
      })
    
  }
}
