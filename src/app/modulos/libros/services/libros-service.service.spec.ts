/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LibrosServiceService } from './libros-service.service';

describe('Service: LibrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrosServiceService]
    });
  });

  it('should ...', inject([LibrosServiceService], (service: LibrosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
