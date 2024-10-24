import {SCREEN_NAME} from '../enums/screens';
export type MainStackParamList = {
  [SCREEN_NAME.HOME]: undefined;
  [SCREEN_NAME.ABOUT]: undefined;
  [SCREEN_NAME.APP_CENTER]: undefined;
  [SCREEN_NAME.COUNTER]: undefined;
  // You can add more screens here as needed
  // [SCREEN_NAME.NEW_SCREEN_NAME]: undefined; // Example without parameters
  // [SCREEN_NAME.NEW_SCREEN_NAME]: { param1: string; param2?: number }; // Example with parameters
};
