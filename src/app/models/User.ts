import { TypedFormControl } from "../TypedReactiveForms/models/typed-form";

export interface User {
    name: string
    age: number;
    address: Address;
}

export interface Address {
    street: TypedFormControl<string>;
}