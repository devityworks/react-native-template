import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
};

export type DefaultStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  any
>;
