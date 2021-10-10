import { CreateTypeClotheInput } from './create-type-clothe.input';
declare const UpdateTypeClotheInput_base: import('@nestjs/common').Type<
  Partial<CreateTypeClotheInput>
>;
export declare class UpdateTypeClotheInput extends UpdateTypeClotheInput_base {
  id: number;
  name: string;
}
export {};
