import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-upload-button',
  templateUrl: './app-upload-button.component.html',
  styleUrls: ['./app-upload-button.component.css']
})
export class AppUploadButtonComponent implements OnInit {
  preview: string;
  @Input() disabled: boolean;
  @Input() accept = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  @Output() ngFile = new EventEmitter<File>();
  @ViewChild('fileInput') inputFile: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  handleFile(file: File) {
    if (!file || !this.accept.includes(file.type)) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.preview = file.name;
    }
    reader.readAsDataURL(file);
    this.ngFile.emit(file);
  }


}
