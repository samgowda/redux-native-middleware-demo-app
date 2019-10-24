import * as redux from 'redux';

// fix for https://github.com/zalmoxisus/redux-devtools-extension/issues/492
declare module 'redux' {
  export type GenericStoreEnhancer = any;
}