import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewMemberComponent } from './form-new-member.component';

describe('FormNewMemberComponent', () => {
  let component: FormNewMemberComponent;
  let fixture: ComponentFixture<FormNewMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
