/**
 * Created by wang on 2017/6/15.
 */
import {Component, Input} from "@angular/core";
@Component({
  selector: "my-child",
  templateUrl: "child.html"
})
export class ChildComponent {
  // 使用@Input获取传递过来的数据
  @Input()
  info: Array<Object>;
  constructor() {

  }
}
