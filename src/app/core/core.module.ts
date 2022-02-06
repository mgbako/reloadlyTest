import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { ErrorHandlerInterceptor } from "./error-handler.interceptor";
import { ApiPrefixInterceptor } from "./interceptors/api-prefix.interceptor";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
