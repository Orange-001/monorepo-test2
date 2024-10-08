declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    MyAffix: (typeof import('my-ui-lib'))['MyAffix']
    MyAlert: (typeof import('my-ui-lib'))['MyAlert']
    MyButton: (typeof import('my-ui-lib'))['MyButton']
  }
}

export {}
