import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{
  
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Antarctic', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;


  public isLoading: boolean = false;


  constructor(private countriesSvc: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesSvc.cacheStore.byRegion.countries 
    this.selectedRegion = this.countriesSvc.cacheStore.byRegion.region
  }

  searchByRegion(region: Region): void{
    this.isLoading = true;
    this.selectedRegion = region;

    this.countriesSvc.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false;
      })
    
  }
}
