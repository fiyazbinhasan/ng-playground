import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpEvent
} from "@angular/common/http";
import { map, tap, last, catchError } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

export class Envelope<T> {
  value: T;
  message: string;
}
@Injectable({
  providedIn: "root"
})
export class UploaderService {
  public progressSource = new BehaviorSubject<Envelope<number>>({
    message: "No File Selected",
    value: 0
  });

  constructor(private http: HttpClient) {}

  upload(file: File) {
    let formData = new FormData();
    formData.append("avatar", file);

    const req = new HttpRequest(
      "POST",
      "http://localhost:5000/upload",
      formData,
      {
        reportProgress: true
      }
    );

    return this.http.request(req).pipe(
      map(event => this.getEventMessage(event, file)),
      tap((envelope: Envelope<number>) => this.progressSource.next(envelope)),
      last()
    );
  }

  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent: {
        const envelope = new Envelope<string>();
        envelope.message = `Uploading file "${file.name}" of size ${file.size}.`;
        return envelope;
      }
      case HttpEventType.UploadProgress: {
        const percentDone = Math.round((100 * event.loaded) / event.total);
        const envelope = new Envelope<number>();
        envelope.value = percentDone;
        envelope.message = `File "${file.name}" is ${percentDone}% uploaded.`;
        return envelope;
      }
      case HttpEventType.Response: {
        const envelope = new Envelope<number>();
        envelope.value = 0;
        envelope.message = `File "${file.name}" was completely uploaded!`;
        return envelope;
      }
      default: {
        const envelope = new Envelope<string>();
        envelope.message = `File "${file.name}" surprising upload event: ${event.type}.`;
        return envelope;
      }
    }
  }
}
