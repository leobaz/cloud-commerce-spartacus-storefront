import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    server = {
        baseUrl: null,
        occPrefix: null
    };

    cmsComponentMapping = {};

}
