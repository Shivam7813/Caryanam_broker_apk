import { Alert } from 'react-native';

export const showToast = (
  title,
  msg
) => {
  Alert.alert(title, msg);
};