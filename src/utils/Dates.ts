import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";

dayjs.extend(localizedFormat);
dayjs.extend(utc);

export class Dates {
  static toLocal(date: string): string {
    return dayjs.utc(date).local().format("LLL");
  }
}
