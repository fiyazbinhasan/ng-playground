import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  structure: any;
  data: Array<any>;

  ngOnInit() {
    this.structure = {
      team: "string",
      played: "number",
      won: "number",
      lost: "number",
      points: "number",
      isQualified: "boolean"
    };

    this.data = [
      {
        team: "AUS",
        played: 9,
        won: 7,
        lost: 2,
        points: 14,
        isQualified: true
      },
      {
        team: "ENG",
        played: 9,
        won: 6,
        lost: 3,
        points: 12,
        isQualified: true
      },
      {
        team: "NZ",
        played: 9,
        won: 5,
        lost: 3,
        points: 11,
        isQualified: true
      },
      {
        team: "SA",
        played: 9,
        won: 3,
        lost: 5,
        points: 7,
        isQualified: false
      },
      {
        team: "WI",
        played: 9,
        won: 2,
        lost: 6,
        points: 5,
        isQualified: false
      }
    ];
  }
}
