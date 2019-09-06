import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnblockUserComponent } from './block-unblock-user.component';

describe('BlockUnblockUserComponent', () => {
  let component: BlockUnblockUserComponent;
  let fixture: ComponentFixture<BlockUnblockUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUnblockUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnblockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
