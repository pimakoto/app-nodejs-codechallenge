import { IsNotEmpty, IsNumber, IsUUID, IsPositive } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsUUID()
  accountExternalIdDebit: string;

  @IsNotEmpty()
  @IsUUID()
  accountExternalIdCredit: string;

  @IsNotEmpty()
  @IsNumber()
  tranferTypeId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  value: number;
}
