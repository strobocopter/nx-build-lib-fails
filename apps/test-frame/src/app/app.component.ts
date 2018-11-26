import { TracerService } from '@stroboware/framework/tracing';
import { Component } from '@angular/core';

@Component({
  selector: 'stroboware-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-frame';

  constructor(private tracer: TracerService) {
    this.tracer.trace({ some: 'thing' })
  }
}
