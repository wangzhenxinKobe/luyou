/**
 * Created by wang on 2017/6/15.
 */
import {Component} from "@angular/core";
@Component({
  selector: "my-father",
  templateUrl: "father.html"
})
export class FatherComponent {
  data: Array<Object>;
  constructor() {
    this.data = [
      {
        "id": 1,
        "name": "html"
      },
      {
        "id": 2,
        "name": "css"
      },
      {
        "id": 3,
        "name": "angular"
      },
      {
        "id": 4,
        "name": "ionic"
      },
      {
        "id": 5,
        "name": "node"
      }
    ]
  }
}
