import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  toasts: Array<any> = [];

  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.showToast();

    }, 3000);

  }

  showToast() {
    this.toasts.push({
      type: 'info',
      message: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }
}



