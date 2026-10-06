// import {type Dispatch, type SetStateAction} from 'react'

export interface UserData {
  fullName: string;
  age: number;
  jobPosition: string;
}

export interface MainContextData {
  userData: UserData | undefined;
  // setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
