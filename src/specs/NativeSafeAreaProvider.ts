import type {
  DirectEventHandler,
  Double,
  // @ts-expect-error: missing type definition for module
} from 'react-native/Libraries/Types/CodegenTypes';
// @ts-expect-error: missing type definition for module
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps, HostComponent } from 'react-native';

export type Event = Readonly<{
  insets: Readonly<{
    top: Double;
    right: Double;
    bottom: Double;
    left: Double;
  }>;
  frame: Readonly<{
    x: Double;
    y: Double;
    width: Double;
    height: Double;
  }>;
}>;

export interface NativeProps extends ViewProps {
  onInsetsChange?: DirectEventHandler<Event, 'paperInsetsChange'>;
}

export default codegenNativeComponent<NativeProps>(
  'RNCSafeAreaProvider',
) as HostComponent<NativeProps>;