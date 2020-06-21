import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../../../shared/interfaces/country.interface';
import { CountryService } from '../../../shared/services/country/country.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public country$: Observable<Country>;

  constructor(
    private countryService: CountryService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getCountry();
  }

  public getCountry(): Observable<Country> {
    const country: string = this.activatedRoute
      .snapshot
      .params
      .country;

    return this.country$ = this.countryService.getCountry(country);
  }

}
