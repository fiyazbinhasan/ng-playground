import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpEvent
} from "@angular/common/http";
import { map, tap, last, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UploaderService {
  constructor(private http: HttpClient) {}

  upload(file: File) {
    const req = new HttpRequest("POST", "https://file.io/", file, {
      reportProgress: true
    });

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap(message => message),
      last()
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round((100 * event.loaded) / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }
}
