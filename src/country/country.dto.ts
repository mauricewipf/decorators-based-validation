import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsString,
  IsUppercase,
  IsUrl,
  Length,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { RegionEnum } from './region.enum';

export class CountryDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsUppercase()
  @Length(2, 2) // Equal to @MinLength(3)@MaxLength(3)
  readonly alpha2Code: string;

  @IsString()
  @IsUppercase()
  @Length(3, 3)
  readonly alpha3Code: string;

  @IsEnum(RegionEnum)
  readonly region: string;

  @IsInt({
    message: 'Population must be an Integer',
  })
  @Min(1, {
    message: '$property must be equal or larger than $constraint1',
  })
  readonly population: number;

  @IsArray()
  @MinLength(2)
  @MaxLength(2, {
    each: true,
  })
  readonly latlng: Array<number>;

  @IsNumber()
  @Min(0)
  readonly area: number;

  @IsArray()
  readonly borders: Array<string>;

  @IsUrl()
  readonly flag: string;
}
