import {TestBed, ComponentFixture, waitForAsync, inject} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatAutocompleteHarness} from '@angular/material/autocomplete/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting}
  from '@angular/platform-browser-dynamic/testing';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AutocompleteHarnessExample} from './autocomplete-harness-example';
import {OverlayContainer} from '@angular/cdk/overlay';

describe('AutocompleteHarnessExample', () => {
  let fixture: ComponentFixture<AutocompleteHarnessExample>;
  let loader: HarnessLoader;
  let overlayContainer: OverlayContainer;

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MatAutocompleteModule],
        declarations: [AutocompleteHarnessExample]
      }).compileComponents();
    }));

  beforeEach( () => {
    fixture = TestBed.createComponent(AutocompleteHarnessExample);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    inject([OverlayContainer], (oc: OverlayContainer) => {
      overlayContainer = oc;
    })();
  });

  afterEach(() => {
    // Angular won't call this for us so we need to do it ourselves to avoid leaks.
    overlayContainer.ngOnDestroy();
    overlayContainer = null!;
  });

  it('should load all autocomplete harnesses', async () => {
      const autocompletes = await loader.getAllHarnesses(MatAutocompleteHarness);
      expect(autocompletes.length).toBe(2);
    }
  );

  it('should get disabled state', async () => {
    const enabled = await loader.getHarness(MatAutocompleteHarness.with({selector: '#plain'}));
    const disabled = await loader.getHarness(MatAutocompleteHarness.with({selector: '#disabled'}));

    expect(await enabled.isDisabled()).toBe(false);
    expect(await disabled.isDisabled()).toBe(true);
  });

  it('should focus and blur an input', async () => {
    const input = await loader.getHarness(MatAutocompleteHarness.with({selector: '#plain'}));
    expect(await input.isFocused()).toBe(false);
    await input.focus();
    expect(await input.isFocused()).toBe(true);
    await input.blur();
    expect(await input.isFocused()).toBe(false);
  });

  it('should be able to type in an input', async () => {
    const input = await loader.getHarness(MatAutocompleteHarness.with({selector: '#plain'}));
    await input.enterText('Hello there');
    expect(await input.getValue()).toBe('Hello there');
  });

  it('should be able to get filtered options', async () => {
    const input = await loader.getHarness(MatAutocompleteHarness.with({selector: '#plain'}));
    await input.focus();
    const options = await input.getOptions({text: /New/});

    expect(options.length).toBe(1);
    expect(await options[0].getText()).toBe('New York');
  });
});
