import { NgModule } from '@angular/core';

import { DevNetSuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [DevNetSuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [DevNetSuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DevNetSuiviSharedCommonModule {}
