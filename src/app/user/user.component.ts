import { Component, OnInit, ViewChild } from "@angular/core";
import { UploaderService, Envelope } from "../services/uploader.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  progress: Envelope<number>;
  fileName = "No file selected";
  file: File;
  imageUrl: string | ArrayBuffer =
    "https://bulma.io/images/placeholders/480x480.png";

  constructor(private uploader: UploaderService) {}

  ngOnInit() {
    this.uploader.progressSource.subscribe(
      progress => (this.progress = progress)
    );
  }

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    }
  }

  onUpload() {
    this.uploader.upload(this.file).subscribe(message => console.log(message));
  }
}
