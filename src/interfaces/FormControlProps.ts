import { Input } from '@gather-learning/lib';

export interface FormControlProps<T> {
  name: string;
  placeholder?: string;
  updateForm?: Function | ((field: string, value: T) => void);
  onChange?: Function | ((value: T) => void);
  onKeyPress?: Function | ((value: T) => void);
  initialValue?: T;
  value?: T;
  validator?: new () => Input;
}
