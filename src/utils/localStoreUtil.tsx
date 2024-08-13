import AsyncStorage from '@react-native-async-storage/async-storage';

const localStoreUtil = {
  storeData: async (key: string, data: Object): Promise<Boolean> => {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  },

  getData: async (key: string): Promise<void | Object> => {
    const item = await AsyncStorage.getItem(key);
    if (!item || item === undefined) return;

    return JSON.parse(item);
  },

  removeData: async (key: string): Promise<Boolean> => {
    await AsyncStorage.removeItem(key);
    return true;
  },

  removeAll: async (): Promise<Boolean> => {
    await AsyncStorage.clear();
    return true;
  },
};

export const saveAccessToken = (accessToken: string) =>
  localStoreUtil.storeData('accessToken', accessToken);
export const getAccessToken = () => localStoreUtil.getData('accessToken');
export const saveUser = (user: Object) =>
  localStoreUtil.storeData('user', user);
export const getUser = () => localStoreUtil.getData('user');

export default localStoreUtil;
