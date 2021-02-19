import { NgModule } from '@angular/core';

import { NzPageHeaderModule}  from 'ng-zorro-antd/page-header';
import { NzTabsModule}  from 'ng-zorro-antd/tabs';
import { NzStatisticModule}  from 'ng-zorro-antd/statistic';
import { NzDescriptionsModule}  from 'ng-zorro-antd/descriptions';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
  exports: [
    NzPageHeaderModule,
    NzTabsModule,
    NzStatisticModule,
    NzDescriptionsModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzTagModule,
    NzTableModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    NzCheckboxModule
  ]
})
export class NgZorroCommonModule {

}
