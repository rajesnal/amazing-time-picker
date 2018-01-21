import { Observable } from 'rxjs/Rx';

/**
 * AmazingTimePicker configuration
 * when calling open() function from 'AmazingTimePickerService' passed as parameter
 */
export interface TimePickerConfig {
  time?: string;
  theme?: 'dark' | 'light';
  rangeTime?: RangeTime;
  arrowStyle?: Pallete;
}

export interface RangeTime {
  start: string;
  end: string;
}

export interface Pallete {
  background?: string;
  color?: string;
}

export interface IDialogResult {
  afterClose(): Observable<string>;
}


export interface ITime {
  minute: number;
  hour: number;
  ampm: 'AM' | 'PM';
}
