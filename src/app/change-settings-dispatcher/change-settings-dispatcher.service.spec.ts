import {TestBed} from '@angular/core/testing';

import {ChangeSettingsDispatcherService} from './change-settings-dispatcher.service';

describe('ChangeSettingsDispatcherService', () => {
  let service: ChangeSettingsDispatcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeSettingsDispatcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
