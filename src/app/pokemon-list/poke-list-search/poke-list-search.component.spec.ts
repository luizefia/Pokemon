import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListSearchComponent } from './poke-list-search.component';

describe('PokeListSearchComponent', () => {
  let component: PokeListSearchComponent;
  let fixture: ComponentFixture<PokeListSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeListSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
