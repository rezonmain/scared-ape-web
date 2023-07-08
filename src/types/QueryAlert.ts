import { AlertProps } from "@/components/ui/Alert/Alert";

export interface QueryAlertOpts {
  showAlert: boolean;
  alert: {
    title: AlertProps["title"];
    message: AlertProps["message"];
    type: AlertProps["type"];
  };
}

class QueryAlert {
  public showAlert = true;
  public alert: QueryAlertOpts["alert"];
  constructor(opts: QueryAlertOpts["alert"]) {
    this.alert = opts;
  }

  get params() {
    return new URLSearchParams({
      showAlert: String(this.showAlert),
      title: this.alert.title,
      message: this.alert.message,
      type: String(this.alert.type),
    });
  }
}

export { QueryAlert };
