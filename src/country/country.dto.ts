import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsString,
  IsUppercase,
  IsUrl,
  Length,
  Min,
  ValidationArguments,
} from 'class-validator';
import { Region } from './region.enum';

export class CountryDto {

  @IsString()
  readonly name: string;

  @IsString()
  @IsUppercase()
  @Length(2, 2, {
    message: ({ value, constraints, property, object, targetName }: ValidationArguments) => {
      if (constraints[0] === constraints[1]) {
        return `${property} must have length ${constraints[0]}`;
      } else {
        return `${property} must have a length 
                between ${constraints[0]} and ${constraints[1]}`;
      }
    },
  })
  readonly alpha2Code: string;

  @IsString()
  @IsUppercase()
  @Length(3, 3) // Equal to @MinLength(3)@MaxLength(3)
  readonly alpha3Code: string;

  @IsEnum(Region)
  readonly region: Region;

  @IsInt({
    message: '$property must be an Integer',
  })
  @Min(1, {
    message: '$property must be equal or larger than $constraint1',
  })
  readonly population: number;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  readonly latlng: Array<number>;

  @IsNumber()
  @Min(0)
  readonly area: number;

  @IsArray()
  readonly borders: Array<string>;

  @IsUrl()
  readonly flag: string;
}
