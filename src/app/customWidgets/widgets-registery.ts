import { Injectable } from '@angular/core';
import { DefaultWidgetRegistry } from 'ngx-schema-form';
import { ArrayWidgetComponent } from './array-widget/array-widget.component';
import { BooleanWidgetComponent } from './boolean-widget/boolean-widget.component';
import { IntegerWidgetComponent } from './integer-widget/integer-widget.component';
import { ObjectWidgetComponent } from './object-widget/object-widget.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { SelectWidgetComponent } from './select-widget/select-widget.component';
import { StringWidgetComponent } from './string-widget/string-widget.component';

@Injectable()
export class WidgetsRegistry extends DefaultWidgetRegistry {
  constructor() {
    super();

    this.register('string', StringWidgetComponent);
    this.register('array', ArrayWidgetComponent);
    this.register('object', ObjectWidgetComponent);
    this.register('boolean', BooleanWidgetComponent);
    this.register('integer', IntegerWidgetComponent);
    this.register('select', SelectWidgetComponent);
    this.register('search', SearchWidgetComponent);

    // this.register('customString', StringWidgetComponent);
    // this.register('customArray', ArrayWidgetComponent);
    // this.register('customObject', ObjectWidgetComponent);
    // this.register('customBoolean', BooleanWidgetComponent);
    // this.register('customInteger', IntegerWidgetComponent);
    // this.register('customSelect', SelectWidgetComponent);
    // this.register('customSearch', SearchWidgetComponent);
  }
}
