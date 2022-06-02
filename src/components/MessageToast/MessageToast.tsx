import Toast, { ToastShowParams } from 'react-native-toast-message';

const messageToast = (params: ToastShowParams) => {
  const { type } = params;
  Toast.show({
    ...params,
    autoHide: true,
    position: 'bottom',
    type: type ? type : 'error',
  });
};

export { messageToast };
