import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
