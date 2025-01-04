export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
};

export type UpdatedUser = {
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
};

export type Name = {
  firstname: string;
  lastname: string;
};

export type Address = {
  city: string;
  street: string;
  number: string;
  zipcode: string;
  geolocation: Geolocation;
};

export type Geolocation = {
  lat: number;
  long: number;
};
