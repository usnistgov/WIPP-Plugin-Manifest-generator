import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormProperty, PropertyGroup } from 'ngx-schema-form';
// import  WippSchema  from ;//'./WippSchema.json';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class AppComponent implements AfterViewChecked {
  schemaUrl = 'https://raw.githubusercontent.com/usnistgov/WIPP-Plugins-base-templates/master/plugin-manifest/schema/wipp-plugin-manifest-schema.json';
  manifest: any;
  schema: any;
  renderedManifest: any;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.httpClient.get(this.schemaUrl)
      .subscribe(res => {
        console.log(res);
        const rawSchema: any = res;
        rawSchema.properties.resourceRequirements.properties.cudaRequirements.properties.cudaComputeCapability.type = 'string';
        rawSchema.properties.resourceRequirements.properties.cudaRequirements.visibleIf = {
            gpu: true
        };
        rawSchema.properties.inputs.items.properties.options = rawSchema.properties.inputs.items.allOf[0].then.properties.options;
        rawSchema.properties.inputs.items.properties.options.visibleIf = {
          oneOf: [
            { type: 'array' },
            { type: 'enum' }
          ]
        };
        rawSchema.properties.inputs.items.properties.options.properties.items = rawSchema.properties.inputs.items.allOf[1].then.properties.options.properties.items;
        rawSchema.properties.inputs.items.properties.options.properties.items.visibleIf = {};
        rawSchema.properties.inputs.items.properties.options.properties.items.properties.uniqueItems.type = 'boolean';
        rawSchema.properties.inputs.items.properties.type.widget = 'select';
        rawSchema.properties.outputs.items.properties.type.widget = 'select';
        for (let [key, value] of Object.entries(rawSchema.properties.ui.items.allOf[0].then.properties)) {
          let property: any = value;
          property.visibleIf = {
            oneOf: [
              {
                key: [
                  "$EXP$ target.value != 'fieldsets'"
                ]
              }
            ]
          };
          rawSchema.properties.ui.items.properties[key] = property;
        }
        rawSchema.properties.ui.items.properties.default.type = 'string';

        rawSchema.fieldsets = [
          {
            title: 'General information',
            fields: [
              'name',
              'version',
              'title',
              'description',
              'author',
              'institution',
              'repository',
              'website',
              'citation',
              'containerId',
              'baseCommand'
            ]
          },
          {
            title: 'Plugin inputs',
            fields: [
              'inputs',
              'ui'
            ]
          },
          {
            title: 'Plugin outputs',
            fields: [
              'outputs'
            ]
          },
          {
            title: 'Plugin resource requirements',
            fields: [
              'resourceRequirements'
            ]
          },
        ];

        this.schema = rawSchema;
        console.log(this.schema);
      });
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }

  verifyFormValidation() {
    return document.querySelector('form')?.checkValidity();
  }

  myFieldBindings = {
    '/inputs': [
      {
        input: (event, formProperty: FormProperty) => {
          console.log("binding");
          const parent: PropertyGroup = formProperty.findRoot();
          let i: number = 0;
          for (const objectProperty of parent.getProperty('inputs')
            .properties) {
            const idKey: string = 'ui/' + i + '/key';
            const child1: FormProperty = objectProperty.properties['name'];
            const child2: FormProperty = parent.getProperty(idKey);
            child2.setValue('inputs.' + child1.value, false);
            ++i;
          }
        },
      },
    ],
  };

  generateUri() {
    var theJSON = JSON.stringify(this.manifest);
    var uri = this.sanitizer.bypassSecurityTrustUrl(
      'data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON)
    );
    return uri;
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsText(files.item(0));
    reader.onload = () =>
      (this.manifest = JSON.parse(reader.result.toString()));
  }

  open(content) {
    this.modalService.open(content);
    this.renderedManifest = { ...this.manifest };

    this.renderedManifest.properties = {
      // task name field
      taskName: {
        type: 'string',
        description: 'Task name',
        title: 'Task name',
        format: 'string',
        widget: 'string',
        placeholder: 'Enter a name for this task',
        maxLength: 127,
      },
      // job inputs fields
      inputs: {
        type: 'object',
        required: [],
        properties: {},
      },
    };

    try {
      // default field bindings - none
      this.renderedManifest.fieldBindings = {};
      this.renderedManifest.inputs.forEach((input) => {
        const inputSchema = {};
        // common properties
        inputSchema['key'] = 'inputs.' + input.name;
        // inputSchema['description'] = input.description;
        if (input.required) {
          this.renderedManifest.properties.inputs.required.push(input.name);
        }
        // type-specific properties

        switch (input.type) {
          case 'collection':
            inputSchema['enum'] = [
              'collection-A',
              'collection-B',
              'collection-C',
            ];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;

          case 'stitchingVector':
            inputSchema['enum'] = [
              'stitchingVector-A',
              'stitchingVector-B',
              'stitchingVector-C',
            ];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;
          case 'pyramidAnnotation':
            inputSchema['enum'] = [
              'pyramidAnnotation-A',
              'pyramidAnnotation-B',
              'pyramidAnnotation-C',
            ];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;
          case 'pyramid':
            inputSchema['enum'] = ['pyramid-A', 'pyramid-B', 'pyramid-C'];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;
          case 'tensorflowModel':
            inputSchema['enum'] = [
              'tensorflowModel-A',
              'tensorflowModel-B',
              'tensorflowModel-C',
            ];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;
          case 'csvCollection':
            inputSchema['enum'] = [
              'csvCollection-A',
              'csvCollection-B',
              'csvCollection-C',
            ];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            break;
          case 'notebook':
            inputSchema['enum'] = ['notebook-A', 'notebook-B', 'notebook-C'];
            inputSchema['widget'] = 'search';
            inputSchema['type'] = 'string';
            inputSchema['format'] = input.type;
            break;
          case 'enum':
            inputSchema['type'] = 'string';
            inputSchema['widget'] = 'select';
            inputSchema['oneOf'] = [];
            input.options.values.forEach((value) => {
              inputSchema['oneOf'].push({
                enum: [value],
                description: value,
              });
            });
            inputSchema['default'] = input.options.values[0];
            break;
          case 'array':
            inputSchema['type'] = 'array';
            inputSchema['format'] = 'array';
            inputSchema['items'] = input.options.items;
            break;
          // Workaround for https://github.com/guillotinaweb/ngx-schema-form/issues/332
          case 'number':
          case 'float':
            inputSchema['type'] = 'string';
            inputSchema['widget'] = 'integer';
            break;
          default:
            inputSchema['type'] = input.type;
        }
        // ui properties
        const ui = this.renderedManifest.ui.find(
          (v) => v.key === inputSchema['key']
        );
        if (ui.hasOwnProperty('title')) {
          inputSchema['title'] = ui.title;
        }
        if (ui.hasOwnProperty('description')) {
          inputSchema['placeholder'] = ui.description;
        }
        if (ui.hasOwnProperty('condition')) {
          inputSchema['condition'] = ui.condition;
          const conditionElements = ui.condition.split('==');
          if (conditionElements.length === 2) {
            const inputName = conditionElements[0].split('.');
            if (inputName.length > 0) {
              inputSchema['visibleIf'] = {};
              inputSchema['visibleIf'][inputName[inputName.length - 1]] =
                conditionElements[1];
            }
          }
        }
        // hidden fields
        if (ui.hasOwnProperty('hidden') && ui.hidden === true) {
          inputSchema['widget'] = 'hidden';
        }
        // custom bindings - update value of target input from value of source input
        if (ui.hasOwnProperty('bind')) {
          const sourceField = '/inputs/' + ui.bind;
          const targetField = ui['key'].split('.').join('/');
          this.renderedManifest.fieldBindings[sourceField] = [
            {
              input: (event, formProperty: FormProperty) => {
                const parent: PropertyGroup = formProperty.findRoot();
                const target: FormProperty = parent.getProperty(targetField);

                target.setValue(formProperty.value, false);
              },
            },
            '2',
          ];
        }
        if (ui.hasOwnProperty('default')) {
          inputSchema['default'] = ui.default;
        }
        this.renderedManifest.properties.inputs.properties[
          input.name
        ] = inputSchema;
      });
      // field sets - arrange fields by groups
      const fieldsetsList = this.renderedManifest.ui.find(
        (v) => v.key === 'fieldsets'
      );
      if (fieldsetsList) {
        this.renderedManifest.properties.inputs.fieldsets =
          fieldsetsList.fieldsets;
      }
      this.renderedManifest.isSchemaValid = true;
    } catch (error) {
      console.log(error);
      this.renderedManifest.properties = {};
      this.renderedManifest.isSchemaValid = false;
    }
  }
}
