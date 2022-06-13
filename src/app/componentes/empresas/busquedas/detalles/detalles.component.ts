import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((response) => {
      console.log(response);
    })
  }

  ngOnInit(): void {
  }

}
