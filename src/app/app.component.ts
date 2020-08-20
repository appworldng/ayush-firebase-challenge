import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as MediumEditor from 'medium-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('media') media: ElementRef;

  constructor(public auth: AngularFireAuth) {}

  ngAfterViewInit() {
    const edit = this.media.nativeElement;
    const editor = new MediumEditor(edit);
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
