import { Controller, Get, Query } from '@nestjs/common';
import { CountryDto } from './country.dto';
import { CountryService } from './country.service';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Controller('country')
export class CountryController {

  constructor(
    private readonly countryService: CountryService,
  ) {
  }

  @Get()
  getCountryByName(
    @Query('name') name: string,
  ): Observable<CountryDto> {
    return this.countryService.getCountryByName(name).pipe(
      map((axiosResponse: AxiosResponse) => axiosResponse?.data),
      catchError((error: AxiosError) => {
        console.log(error);
        return throwError(error);
      }),
    );
  }
}
