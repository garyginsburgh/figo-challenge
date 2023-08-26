interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface ID {
  name: string;
  value: string;
}

export interface UserData {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: ID;
  picture: Picture;
  nat: string;
}

interface Info {
  page: number;
  results: number;
  seed: string;
  version: string;
}

export interface UserResponse {
  results: UserData[];
  info: Info;
}
