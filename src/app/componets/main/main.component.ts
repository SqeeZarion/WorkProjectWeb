import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import * as Parallax from "parallax-js";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ngOnInit():void {
    var scene:any = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }
}
