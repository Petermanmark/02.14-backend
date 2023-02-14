import { IsNumber, IsString, Min } from 'class-validator';

export class EsemenyDto {
  @IsString()
  megnevezes: string;

  @IsNumber()
  @Min(0)
  resztvevok: number;
}
