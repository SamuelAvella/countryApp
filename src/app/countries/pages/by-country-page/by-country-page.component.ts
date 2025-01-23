import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries: Country[] = []
  public isLoading: boolean = false;
  public initialValue: string = '';


  constructor(private countriesSvc: CountriesService){
    this.countries = this.countriesSvc.cacheStore.byCountries.countries 
    this.initialValue = this.countriesSvc.cacheStore.byCountries.term
  }

  searchByCountry(term: string): void{
    this.isLoading = true;


    this.countriesSvc.searchCountry(term)
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false;
      })
    
  }
}
