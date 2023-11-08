// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { TodoState } from 'store/todo/type';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  todo: TodoState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
