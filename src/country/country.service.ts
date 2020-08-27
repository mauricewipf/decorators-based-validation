import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CountryDto } from './country.dto';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryService {
  static readonly URL = 'https://restcountries.eu/rest/v2';

  constructor(private readonly httpService: HttpService) {
  }

  getCountryByName(name: string): Observable<AxiosResponse<CountryDto>> {
    return this.httpService.get(`${CountryService.URL}/name/${name}`);
  }

  getCountryByCode(code: string): Observable<AxiosResponse<CountryDto>> {
    return this.httpService.get(`${CountryService.URL}/alpha/${code}`);
  }

  updateCountryByCode(code: string, countryDto: CountryDto): Observable<AxiosResponse<CountryDto>> {
    return this.getCountryByCode(code).pipe(
      map((axiosResponse: AxiosResponse) => {
        return {
          ...axiosResponse,
          data: {
            ...axiosResponse.data,
            ...countryDto,
          },
        };
      }),
    );
  }
}
