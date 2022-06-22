import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="px-3">
      <div class="vstack gap-4 align-items-center pt-5" >
        <h2 class="mb-0">此頁面不存在。</h2>
        <a routerLink="" class="btn btn-primary">返回</a>
      </div>
    </div>`
})
export class PageNotFoundComponent { }
