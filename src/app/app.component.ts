import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'step3d';
  totale: any;
  lun: any;
  mar: any;
  mer: any;
  gio: any;
  ven: any;
  sab: any;
  dom: any;

  constructor(private renderer: Renderer2, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.getTotales();

    this.getLunedi();
    this.getMartedi();
    this.getMercoledi();
    this.getGiovedi();
    this.getVenerdi();
    this.getSabato();
    this.getDomenica();
  }

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

  getTotales() {
    return this.getTotale().subscribe(data =>
      this.totale = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getLunedi() {
    return this.getLun().subscribe(data =>
      this.lun = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getMartedi() {
    return this.getMar().subscribe(data =>
      this.mar = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getMercoledi() {
    return this.getMer().subscribe(data =>
      this.mer = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getGiovedi() {
    return this.getGio().subscribe(data =>
      this.gio = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getVenerdi() {
    return this.getVen().subscribe(data =>
      this.ven = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getSabato() {
    return this.getSab().subscribe(data =>
      this.sab = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }

  getDomenica() {
    return this.getDom().subscribe(data =>
      this.dom = data.docs.map(e => {
        return {
          id: e.id,
          ...e.data() as any
        } as any;
      }));
  }


  getTotale() {
    return this.firestore.collection('totale').get();
  }

  getLun() {
    return this.firestore.collection('lun').get();
  }

  getMar() {
    return this.firestore.collection('mar').get();
  }

  getMer() {
    return this.firestore.collection('mer').get();
  }

  getGio() {
    return this.firestore.collection('gio').get();
  }

  getVen() {
    return this.firestore.collection('ven').get();
  }

  getSab() {
    return this.firestore.collection('sab').get();
  }

  getDom() {
    return this.firestore.collection('dom').get();
  }
}
