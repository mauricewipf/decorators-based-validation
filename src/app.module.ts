import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryService } from './country/country.service';
import { CountryController } from './country/country.controller';

@Module({
  imports: [
    HttpModule,
  ],
  controllers: [AppController, CountryController],
  providers: [AppService, CountryService],
})
export class AppModule {
}
