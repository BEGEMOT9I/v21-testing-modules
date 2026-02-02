import { TestBed } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import {THEME_COLOR} from '../button/button.component';
// import {SHARED_THEME_COLOR} from '../constants';
import {SharedModule} from '../shared.module';

@Component({
  selector: 'test-component',
  template: '<test-button [style]="{ color }">TestComponent</test-button>',
  standalone: false
})
class TestComponent {
  color = THEME_COLOR
}

@NgModule({
  declarations: [TestComponent],
  imports: [SharedModule],
  exports: [TestComponent],
})
class TestModule {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [TestModule, SharedModule],
    }).compileComponents();
  });

  it('should render test component', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('TestComponent');
  });
});
