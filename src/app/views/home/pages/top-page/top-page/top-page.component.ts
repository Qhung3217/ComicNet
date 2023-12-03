import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Status } from 'src/app/core/types/status.type';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.maintainParams();
  }

  maintainParams() {
    this.subscription = this.route.queryParams.subscribe((params) => {
      const page = +params['page'];
      let status;
      switch (params['status'] as Status) {
        case 'all':
          status = 'all';
          break;
        case 'completed':
          status = 'completed';
          break;
        case 'ongoing':
          status = 'ongoing';
          break;
        default:
          status = 'all';
      }

      if (!page)
        this.router.navigate([], {
          queryParams: {
            status: status,
            page: page ? page : 1,
          },
          queryParamsHandling: 'merge',
        });
    });
  }

  changeStatus(status: Status) {
    this.router.navigate([], {
      queryParams: {
        status,
        page: 1,
      },
    });
  }
}
