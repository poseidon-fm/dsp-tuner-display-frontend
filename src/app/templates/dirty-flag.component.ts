import {Component, Input} from '@angular/core';

@Component({
  selector: 'dirty-flag',
  template: `
    <span style="position:absolute;margin-left:5px;font-size:28px;color:{{ flag ? 'red' : 'green' }}">&bull;</span>
  `
})
export class DirtyFlagComponent {
  @Input() flag!: boolean
}
