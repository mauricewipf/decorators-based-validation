import { Controller, Get, Query } from '@nestjs/common';
import { CountryDto } from './country-dto';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {

  constructor(
    private readonly countryService: CountryService,
  ) {
  }

  @Get()
  async getDensestCountry(
    @Query('country1') country1: string,
    @Query('country2') country2: string,
  ): Promise<string> {
    const res1 = await this.countryService.getCountry(country1).toPromise();
    const res2 = await this.countryService.getCountry(country2).toPromise();
    const c1: CountryDto = res1.data[0];
    const c2: CountryDto = res2.data[0];

    if (c1.population / c1.area > c2.population / c2.area) {
      return `${c1.name} is denser than ${c2.name}.`;
    } else {
      return `${c2.name} is denser than ${c1.name}.`;
    }
  }

}
