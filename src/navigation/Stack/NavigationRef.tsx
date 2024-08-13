import {createNavigationContainerRef} from '@react-navigation/native';

import {CommonActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
}

export const goBack = () => {
  if (navigationRef?.isReady()) {
    navigationRef?.goBack();
  }
};

export const resetNavigation = (name: string) => {
  if (navigationRef?.isReady()) {
    navigationRef?.reset({
      index: 0,
      routes: [{name: name}],
    });
  }
};

export function canGoBack() {
  if (navigationRef?.isReady()) {
    navigationRef?.canGoBack();
  }
}
