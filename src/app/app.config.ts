import { InjectionToken  } from "@angular/core";

export let APP_CONFIG = new InjectionToken ("app.config");

export interface IAppConfig {
  apiEndpoint: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: 'http://localhost:4800'
  // apiEndpoint: 'https://calendar5-dev-ed.my.salesforce.com/services/data/v37.0'
};
