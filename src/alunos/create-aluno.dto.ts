import { IsString, IsInt } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  nome: string;

  @IsInt()
  escolaId: number;
}