import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CountryDto } from './country.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class CountryService {
  static readonly URL = 'https://restcountries.eu/rest/v2';

  constructor(private readonly httpService: HttpService) {
  }

  getCountry(country: string): Observable<AxiosResponse<CountryDto>> {
    return this.httpService.get(`${CountryService.URL}/name/${country}`);
  }

}
