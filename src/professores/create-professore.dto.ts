import { IsString, IsInt } from 'class-validator';

export class CreateProfessorDto {
  @IsString()
  nome: string;

  @IsInt()
  escolaId: number;
}