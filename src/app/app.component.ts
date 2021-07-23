import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'step3d';

  constructor(private renderer: Renderer2) {}

  @ViewChild('show') show: ElementRef<HTMLDivElement>;
  toggleTilt: Boolean = false;

  onClickBack() {
    this.toggleTilt = !this.toggleTilt;
    if(this.toggleTilt) {
      this.renderer.addClass(this.show.nativeElement, 'details');
    } else {
      this.renderer.removeClass(this.show.nativeElement, 'details');
    }
  }
}
