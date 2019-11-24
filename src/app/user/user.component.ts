import { Component, OnInit, ViewChild } from "@angular/core";
import { UploaderService } from "../services/uploader.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  fileName = "No file selected";
  file: File;
  imageUrl: string | ArrayBuffer =
    "https://bulma.io/images/placeholders/480x480.png";

  constructor(private uploader: UploaderService) {}

  ngOnInit() {}

  onChange(file: File) {
    if (file && file.type === "image/png") {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        this.imageUrl = reader.result;
      };
    } else {
      alert("Only png files are allowed");
    }
  }

  onUpload() {
    this.uploader.upload(this.file).subscribe(msg => console.log(msg));
  }
}
