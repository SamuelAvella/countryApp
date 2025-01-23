import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-page',
  standalone: false,
  
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

    private countrySvc: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( switchMap(({id}) => 
        this.countrySvc.searchCountryByAlphaCode(id)))
      .subscribe( (resp) => {
        if(!resp) return this.router.navigateByUrl('');
        return this.country = resp;  
      });
  }
}
