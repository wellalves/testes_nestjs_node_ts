import { IsString, IsInt } from 'class-validator';

export class CreateAulaDto {
  @IsString()
  materia: string;

  @IsInt()
  professorId: number;
}