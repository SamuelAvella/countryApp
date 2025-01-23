import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  standalone: false,
  
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries: Country[] = []

  constructor(private countriesSvc: CountriesService){}

  searchByRegion(term: string): void{
    this.countriesSvc.searchRegion(term)
      .subscribe( countries => {
        this.countries = countries
      })
    
  }
}
