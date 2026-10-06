// import { type Dispatch, type SetStateAction } from "react";

export interface UserData {
  firstName: string;
  lastName: string;
  age: number;
  jobPosition: string;
}

export interface MainContextData {
  postedMessage: string; 
  // setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
