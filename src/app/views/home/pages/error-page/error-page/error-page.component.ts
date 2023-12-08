import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/core/services/error/error.service';
import { SeoService } from 'src/app/core/services/seo/seo.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  type: 'default' | 'other' = 'default';
  constructor(
    private route: ActivatedRoute,
    public errorService: ErrorService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      const type = params['type'];
      if (type && type === 'other' && this.errorService.message != '') {
        this.type = type;
        this.seoService.setSeoData(
          'Lỗi ' +
            this.errorService.errorCode +
            ' - ' +
            this.errorService.message,
          this.errorService.message
        );
      } else {
        this.seoService.setSeoData(
          'Lỗi ' + this.errorService.errorCode + ' - Không tìm thấy trang',
          'Trang bạn đang tìm kiếm không tồn tại.'
        );
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
