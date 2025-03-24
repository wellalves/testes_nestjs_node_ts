import { IsString, MinLength } from 'class-validator';

export class CreateEscolaDto {
  @IsString()
  @MinLength(3)
  nome: string;
}