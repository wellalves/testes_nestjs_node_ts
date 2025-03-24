import { IsNumber, IsString, IsInt } from 'class-validator';

export class CreateMensalidadeDto {
  @IsNumber()
  valor: number;

  @IsString()
  dataPagamento: string;

  @IsInt()
  alunoId: number;
}