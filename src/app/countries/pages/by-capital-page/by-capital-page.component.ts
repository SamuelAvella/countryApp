import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = []
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesSvc: CountriesService){}

  ngOnInit(): void {
     this.countries = this.countriesSvc.cacheStore.byCapital.countries 
     console.log('countries', this.countries);
     
     this.initialValue = this.countriesSvc.cacheStore.byCapital.term
     console.log('search', this.initialValue);
     
  }

  searchByCapital(term: string): void{

    this.isLoading = true;

    this.countriesSvc.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false
      })
    
  }
}
