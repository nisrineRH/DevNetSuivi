import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DevNetSuiviSharedLibsModule, DevNetSuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DevNetSuiviSharedLibsModule, DevNetSuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DevNetSuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevNetSuiviSharedModule {
  static forRoot() {
    return {
      ngModule: DevNetSuiviSharedModule
    };
  }
}
