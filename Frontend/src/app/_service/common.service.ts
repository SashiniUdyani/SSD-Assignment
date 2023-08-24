import {Injectable} from '@angular/core';
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private datePipe: DatePipe) {
  }

  getCurDate() {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  setNumberPositive(val) {
    if (val < 0) {
      return val * -1;
    } else if (val === 0) {
      return 1;
    } else {
      return val;
    }
  }
}
