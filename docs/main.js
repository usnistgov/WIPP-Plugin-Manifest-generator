"use strict";
(self["webpackChunktesting_app"] = self["webpackChunktesting_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);

// import  WippSchema  from ;//'./WippSchema.json';








function AppComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "h3", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manifest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_23_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const d_r3 = restoredCtx.dismiss; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](d_r3("Cross click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "sf-form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 21)(9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_23_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const c_r2 = restoredCtx.close; return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](c_r2("Close click")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx_r1.renderedManifest)("bindings", ctx_r1.renderedManifest.fieldBindings[ctx_r1.sourceField]);
} }
const _c0 = function (a0) { return { banIcon: a0 }; };
class AppComponent {
    constructor(config, modalService, sanitizer, cd, httpClient) {
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.httpClient = httpClient;
        this.schemaUrl = 'https://raw.githubusercontent.com/usnistgov/fair-chain-compute-container/2db11bceaf42834d70b15e742f60433c2486e81a/plugin-manifest/schema/wipp-plugin-manifest-schema.json';
        this.myFieldBindings = {
            '/inputs': [
                {
                    input: (event, formProperty) => {
                        console.log("binding");
                        const parent = formProperty.findRoot();
                        let i = 0;
                        for (const objectProperty of parent.getProperty('inputs')
                            .properties) {
                            const idKey = 'ui/' + i + '/key';
                            const child1 = objectProperty.properties['name'];
                            const child2 = parent.getProperty(idKey);
                            child2.setValue('inputs.' + child1.value, false);
                            ++i;
                        }
                    },
                },
            ],
        };
        config.backdrop = 'static';
        config.keyboard = false;
        this.httpClient.get(this.schemaUrl)
            .subscribe(res => {
            console.log(res);
            const rawSchema = res;
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
                let property = value;
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
    generateUri() {
        var theJSON = JSON.stringify(this.manifest);
        var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
        return uri;
    }
    handleFileInput(files) {
        const reader = new FileReader();
        reader.readAsText(files.item(0));
        reader.onload = () => (this.manifest = JSON.parse(reader.result.toString()));
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
                const ui = this.renderedManifest.ui.find((v) => v.key === inputSchema['key']);
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
                            input: (event, formProperty) => {
                                const parent = formProperty.findRoot();
                                const target = parent.getProperty(targetField);
                                target.setValue(formProperty.value, false);
                            },
                        },
                        '2',
                    ];
                }
                if (ui.hasOwnProperty('default')) {
                    inputSchema['default'] = ui.default;
                }
                this.renderedManifest.properties.inputs.properties[input.name] = inputSchema;
            });
            // field sets - arrange fields by groups
            const fieldsetsList = this.renderedManifest.ui.find((v) => v.key === 'fieldsets');
            if (fieldsetsList) {
                this.renderedManifest.properties.inputs.fieldsets =
                    fieldsetsList.fieldsets;
            }
            this.renderedManifest.isSchemaValid = true;
        }
        catch (error) {
            console.log(error);
            this.renderedManifest.properties = {};
            this.renderedManifest.isSchemaValid = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModalConfig, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal])], decls: 25, vars: 11, consts: [[1, "container-fluid"], [1, "row", "page"], [1, "col-md-5"], [3, "schema", "bindings", "ngModel", "ngModelChange"], [1, "col-md", "manifest"], ["id", "manifestAndButtons", 1, "container-fluid"], ["id", "manifest", 1, "overflow-auto"], [1, "row"], [1, "col-md-auto", "no-gutters"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "disabled", "ngClass", "click"], ["download", "Wipp-Manifest.json", 1, "btn", "btn-outline-primary", 3, "href"], [1, "col-md-4", "no-gutters"], ["type", "file", 1, "btn", "btn-outline-primary", 3, "change"], ["content", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "schema", "bindings"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "sf-form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_sf_form_ngModelChange_4_listener($event) { return ctx.manifest = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manifest:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0)(14, "div", 8)(15, "div", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.open(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Render ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9)(19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12)(22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_input_change_22_listener($event) { return ctx.handleFileInput($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_ng_template_23_Template, 11, 2, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schema", ctx.schema)("bindings", ctx.myFieldBindings)("ngModel", ctx.manifest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx.manifest));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.verifyFormValidation())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.verifyFormValidation()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.generateUri(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_4__.FormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe], styles: [".banIcon[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n\n#manifestAndButtons[_ngcontent-%COMP%] {\n  position: fixed;\n  margin-left: 50px;\n  margin-top: 8px;\n  width: 51%;\n}\n\n#manifest[_ngcontent-%COMP%] {\n  position: static;\n  height: 85vh;\n}\n\n@media (max-width: 992px) {\n  #manifestAndButtons[_ngcontent-%COMP%] {\n    position: static;\n    margin-left: 0px;\n  }\n  #manifest[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n\n#imageWipp[_ngcontent-%COMP%] {\n  margin: 10px 0 10px 0;\n  width: 100%;\n  align-self: center;\n}\n\n.no-gutters[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  padding-left: 0;\n}\n\n\n\n  ngb-modal-backdrop {\n  z-index: 1050 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBLHlGQUF5Rjs7QUFDekY7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFuSWNvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbiNtYW5pZmVzdEFuZEJ1dHRvbnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiA1MSU7XG59XG5cbiNtYW5pZmVzdCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGhlaWdodDogODV2aDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNtYW5pZmVzdEFuZEJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAjbWFuaWZlc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4jaW1hZ2VXaXBwIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubm8tZ3V0dGVycyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4vKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL25nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvaXNzdWVzLzI2ODYjaXNzdWVjb21tZW50LTEwNzk5OTU3ODQgKi9cbjo6bmctZGVlcCBuZ2ItbW9kYWwtYmFja2Ryb3Age1xuICB6LWluZGV4OiAxMDUwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _customWidgets_string_widget_string_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customWidgets/string-widget/string-widget.component */ 2639);
/* harmony import */ var _customWidgets_widgets_registery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customWidgets/widgets-registery */ 4343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _customWidgets_array_widget_array_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customWidgets/array-widget/array-widget.component */ 326);
/* harmony import */ var _customWidgets_object_widget_object_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customWidgets/object-widget/object-widget.component */ 6748);
/* harmony import */ var _customWidgets_boolean_widget_boolean_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customWidgets/boolean-widget/boolean-widget.component */ 8329);
/* harmony import */ var _customWidgets_integer_widget_integer_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customWidgets/integer-widget/integer-widget.component */ 103);
/* harmony import */ var _customWidgets_select_widget_select_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customWidgets/select-widget/select-widget.component */ 6517);
/* harmony import */ var _customWidgets_search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customWidgets/search-widget/search-widget.component */ 6029);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [{ provide: ngx_schema_form__WEBPACK_IMPORTED_MODULE_11__.WidgetRegistry, useClass: _customWidgets_widgets_registery__WEBPACK_IMPORTED_MODULE_3__.WidgetsRegistry }], imports: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_11__.SchemaFormModule.forRoot(),
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _customWidgets_string_widget_string_widget_component__WEBPACK_IMPORTED_MODULE_2__.StringWidgetComponent,
        _customWidgets_array_widget_array_widget_component__WEBPACK_IMPORTED_MODULE_4__.ArrayWidgetComponent,
        _customWidgets_object_widget_object_widget_component__WEBPACK_IMPORTED_MODULE_5__.ObjectWidgetComponent,
        _customWidgets_boolean_widget_boolean_widget_component__WEBPACK_IMPORTED_MODULE_6__.BooleanWidgetComponent,
        _customWidgets_integer_widget_integer_widget_component__WEBPACK_IMPORTED_MODULE_7__.IntegerWidgetComponent,
        _customWidgets_select_widget_select_widget_component__WEBPACK_IMPORTED_MODULE_8__.SelectWidgetComponent,
        _customWidgets_search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_9__.SearchWidgetComponent], imports: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_11__.SchemaFormModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule], exports: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] }); })();


/***/ }),

/***/ 326:
/*!**********************************************************************!*\
  !*** ./src/app/customWidgets/array-widget/array-widget.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayWidgetComponent": () => (/* binding */ ArrayWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function ArrayWidgetComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r5.schema.description, " ");
} }
function ArrayWidgetComponent_ng_template_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r6.schema.examples, " ");
} }
function ArrayWidgetComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArrayWidgetComponent_ng_template_3_div_0_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArrayWidgetComponent_ng_template_3_div_1_Template, 4, 1, "div", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.schema.examples);
} }
function ArrayWidgetComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r0);
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
function ArrayWidgetComponent_div_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayWidgetComponent_div_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const itemProperty_r7 = ctx_r11.$implicit; const i_r8 = ctx_r11.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.removeInputAndUiItem(itemProperty_r7, i_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r9.id === "ui" ? "removeUiButton" : ctx_r9.id == "inputs" ? "removeInputButton" : ctx_r9.id == "outputs" ? "removeOutputButton" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r9.id === "ui"))("disabled", ctx_r9.isRemoveButtonDisabled());
} }
function ArrayWidgetComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sf-form-element", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArrayWidgetComponent_div_6_button_2_Template, 3, 6, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemProperty_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formProperty", itemProperty_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r3.schema.hasOwnProperty("minItems") && ctx_r3.schema.hasOwnProperty("maxItems") && ctx_r3.schema.minItems === ctx_r3.schema.maxItems));
} }
function ArrayWidgetComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrayWidgetComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.addInputAndUiItem()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r4.id === "ui" ? "addUiButton" : ctx_r4.id == "inputs" ? "addInputButton" : "")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r4.id === "ui"))("disabled", ctx_r4.isAddButtonDisabled());
} }
class ArrayWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.ArrayWidget {
    removeInputAndUiItem(item, i) {
        this.removeItem(item);
        if (this.id == 'inputs') {
            var removeUiButton;
            removeUiButton = document.getElementsByClassName('removeUiButton')[i];
            removeUiButton.click();
        }
    }
    addInputAndUiItem() {
        this.addItem();
        if (this.id == 'inputs') {
            var btnAddUi;
            btnAddUi = document.getElementById('addUiButton');
            btnAddUi.click();
        }
    }
}
ArrayWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵArrayWidgetComponent_BaseFactory; return function ArrayWidgetComponent_Factory(t) { return (ɵArrayWidgetComponent_BaseFactory || (ɵArrayWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ArrayWidgetComponent)))(t || ArrayWidgetComponent); }; }();
ArrayWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArrayWidgetComponent, selectors: [["sf-array-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 5, consts: [[1, "widget", "form-group"], [1, "horizontal", "control-label"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "btn btn-outline-secondary array-add-button", 3, "id", "ngClass", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"], [3, "formProperty"], ["style", "margin-bottom: 5px;", "class", "btn btn-outline-secondary array-remove-button", 3, "class", "ngClass", "disabled", "click", 4, "ngIf"], [1, "btn", "btn-outline-secondary", "array-remove-button", 2, "margin-bottom", "5px", 3, "ngClass", "disabled", "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-minus"], [1, "btn", "btn-outline-secondary", "array-add-button", 3, "id", "ngClass", "disabled", "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-plus"]], template: function ArrayWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ArrayWidgetComponent_ng_template_3_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArrayWidgetComponent_button_5_Template, 2, 1, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArrayWidgetComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ArrayWidgetComponent_button_7_Template, 3, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schema.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.description || ctx.schema.examples);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formProperty.properties);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.schema.hasOwnProperty("minItems") && ctx.schema.hasOwnProperty("maxItems") && ctx.schema.minItems === ctx.schema.maxItems));
    } }, dependencies: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip], encapsulation: 2 });


/***/ }),

/***/ 8329:
/*!**************************************************************************!*\
  !*** ./src/app/customWidgets/boolean-widget/boolean-widget.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanWidgetComponent": () => (/* binding */ BooleanWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function BooleanWidgetComponent_div_3_input_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r2.name);
} }
function BooleanWidgetComponent_div_3_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r6.schema.description, "");
} }
function BooleanWidgetComponent_div_3_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r7.schema.examples, "");
} }
function BooleanWidgetComponent_div_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BooleanWidgetComponent_div_3_ng_template_4_div_0_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooleanWidgetComponent_div_3_ng_template_4_div_1_Template, 4, 1, "div", 3);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schema.examples);
} }
function BooleanWidgetComponent_div_3_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r3);
} }
function BooleanWidgetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BooleanWidgetComponent_div_3_input_3_Template, 1, 2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BooleanWidgetComponent_div_3_ng_template_4_Template, 2, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BooleanWidgetComponent_div_3_button_6_Template, 2, 1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control)("indeterminate", ctx_r0.control.value !== false && ctx_r0.control.value !== true ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r0.name)("id", ctx_r0.id)("disabled", ctx_r0.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.schema.description || ctx_r0.schema.examples);
} }
function BooleanWidgetComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "label", 1)(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BooleanWidgetComponent_ng_container_4_div_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onCheck($event.target)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r9.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r8.name)("disabled", ctx_r8.schema.readOnly)("checked", ctx_r8.checked[option_r9.enum[0]] ? true : null)("id", ctx_r8.id + "." + option_r9.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r9.description, " ");
} }
function BooleanWidgetComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BooleanWidgetComponent_ng_container_4_div_1_Template, 4, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.schema.items.oneOf);
} }
class BooleanWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.CheckboxWidget {
}
BooleanWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵBooleanWidgetComponent_BaseFactory; return function BooleanWidgetComponent_Factory(t) { return (ɵBooleanWidgetComponent_BaseFactory || (ɵBooleanWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BooleanWidgetComponent)))(t || BooleanWidgetComponent); }; }();
BooleanWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BooleanWidgetComponent, selectors: [["sf-boolean-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "widget", "form-group"], [1, "horizontal", "control-label"], ["class", "checkbox", 4, "ngIf"], [4, "ngIf"], [1, "checkbox"], ["type", "checkbox", 3, "formControl", "indeterminate"], ["type", "hidden", 3, "formControl", 4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["type", "hidden", 3, "formControl"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"], ["class", "checkbox", 4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "value", "change"]], template: function BooleanWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BooleanWidgetComponent_div_3_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BooleanWidgetComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schema.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.type != "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.type === "array");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip], encapsulation: 2 });


/***/ }),

/***/ 103:
/*!**************************************************************************!*\
  !*** ./src/app/customWidgets/integer-widget/integer-widget.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegerWidgetComponent": () => (/* binding */ IntegerWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function IntegerWidgetComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntegerWidgetComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r4.schema.description, "");
} }
function IntegerWidgetComponent_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r5.schema.examples, "");
} }
function IntegerWidgetComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, IntegerWidgetComponent_ng_template_4_div_0_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IntegerWidgetComponent_ng_template_4_div_1_Template, 4, 1, "div", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.examples);
} }
function IntegerWidgetComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r1);
} }
class IntegerWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.IntegerWidget {
}
IntegerWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵIntegerWidgetComponent_BaseFactory; return function IntegerWidgetComponent_Factory(t) { return (ɵIntegerWidgetComponent_BaseFactory || (ɵIntegerWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](IntegerWidgetComponent)))(t || IntegerWidgetComponent); }; }();
IntegerWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntegerWidgetComponent, selectors: [["sf-integer-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 15, consts: [[1, "widget", "form-group"], [1, "horizontal", "control-label"], ["style", "color:red;", 4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], [1, "text-widget", "integer-widget", "form-control", 3, "formControl"], [2, "color", "red"], [4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"]], template: function IntegerWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IntegerWidgetComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IntegerWidgetComponent_ng_template_4_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IntegerWidgetComponent_button_6_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schema.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.description || ctx.schema.examples);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx.schema.readOnly ? true : null)("name", ctx.name)("id", ctx.id)("type", "number")("min", ctx.schema.minimum)("max", ctx.schema.maximum)("placeholder", ctx.schema.placeholder)("maxLength", ctx.schema.maxLength || null)("required", ctx.schema.isRequired || null)("minLength", ctx.schema.minLength || null);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip], encapsulation: 2 });


/***/ }),

/***/ 6748:
/*!************************************************************************!*\
  !*** ./src/app/customWidgets/object-widget/object-widget.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectWidgetComponent": () => (/* binding */ ObjectWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r7.schema.description, " ");
} }
function ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, obj_r10), " ");
} }
function ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_1_span_4_Template, 3, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.schema.examples);
} }
function ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_0_Template, 4, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_div_1_Template, 5, 1, "div", 1);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.examples);
} }
function ObjectWidgetComponent_fieldset_0_legend_1_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r4);
} }
function ObjectWidgetComponent_fieldset_0_legend_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectWidgetComponent_fieldset_0_legend_1_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ObjectWidgetComponent_fieldset_0_legend_1_button_4_Template, 2, 1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fieldset_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fieldset_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.description || ctx_r2.schema.examples);
} }
function ObjectWidgetComponent_fieldset_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sf-form-element", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fieldId_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formProperty", ctx_r3.formProperty.getProperty(fieldId_r12));
} }
function ObjectWidgetComponent_fieldset_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ObjectWidgetComponent_fieldset_0_legend_1_Template, 5, 2, "legend", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ObjectWidgetComponent_fieldset_0_div_2_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fieldset_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fieldset_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fieldset_r1.fields);
} }
class ObjectWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.ObjectWidget {
}
ObjectWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵObjectWidgetComponent_BaseFactory; return function ObjectWidgetComponent_Factory(t) { return (ɵObjectWidgetComponent_BaseFactory || (ɵObjectWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ObjectWidgetComponent)))(t || ObjectWidgetComponent); }; }();
ObjectWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObjectWidgetComponent, selectors: [["sf-form-object"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"], [3, "formProperty"]], template: function ObjectWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ObjectWidgetComponent_fieldset_0_Template, 3, 2, "fieldset", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formProperty.schema.fieldsets);
    } }, dependencies: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.FormElementComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 6029:
/*!************************************************************************!*\
  !*** ./src/app/customWidgets/search-widget/search-widget.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchWidgetComponent": () => (/* binding */ SearchWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function SearchWidgetComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r0.name);
} }
function SearchWidgetComponent_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchWidgetComponent_ng_template_1_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r10.schema.description, "");
} }
function SearchWidgetComponent_ng_template_1_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r11.schema.examples, "");
} }
function SearchWidgetComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchWidgetComponent_ng_template_1_ng_template_4_div_0_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchWidgetComponent_ng_template_1_ng_template_4_div_1_Template, 4, 1, "div", 12);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.examples);
} }
function SearchWidgetComponent_ng_template_1_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r4);
} }
function SearchWidgetComponent_ng_template_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value must match the pattern: ", ctx_r8.schema.pattern.substring(1, ctx_r8.schema.pattern.toString().length - 1), "");
} }
function SearchWidgetComponent_ng_template_1_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r9.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r9.name);
} }
function SearchWidgetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchWidgetComponent_ng_template_1_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchWidgetComponent_ng_template_1_ng_template_4_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchWidgetComponent_ng_template_1_button_6_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchWidgetComponent_ng_template_1_span_9_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchWidgetComponent_ng_template_1_input_10_Template, 1, 2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.schema.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.isRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.description || ctx_r2.schema.examples);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.name)("formControl", ctx_r2.control)("ngbTypeahead", ctx_r2.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx_r2.schema.widget.id !== "color" && ctx_r2.schema.readOnly ? true : null)("type", !ctx_r2.schema.widget.id || ctx_r2.schema.widget.id === "string" ? "text" : ctx_r2.schema.widget.id)("id", ctx_r2.id)("placeholder", ctx_r2.schema.placeholder)("maxLength", ctx_r2.schema.maxLength || null)("minLength", ctx_r2.schema.minLength || null)("required", ctx_r2.schema.isRequired || null)("disabled", ctx_r2.schema.widget.id == "color" && ctx_r2.schema.readOnly ? true : null)("pattern", ctx_r2.schema.pattern ? ctx_r2.schema.pattern : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.checkIfPatternMatch(_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.widget.id === "color" && ctx_r2.schema.readOnly);
} }
class SearchWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.StringWidget {
    constructor() {
        super(...arguments);
        this.search = (text$) => text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((term) => this.schema.enum.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)));
    }
    checkIfPatternMatch(value) {
        var patt = new RegExp(this.schema.pattern);
        if (patt.test(value))
            return true;
        return false;
    }
}
SearchWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵSearchWidgetComponent_BaseFactory; return function SearchWidgetComponent_Factory(t) { return (ɵSearchWidgetComponent_BaseFactory || (ɵSearchWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SearchWidgetComponent)))(t || SearchWidgetComponent); }; }();
SearchWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchWidgetComponent, selectors: [["app-search-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["type", "hidden", 3, "formControl", 4, "ngIf", "ngIfElse"], ["notHiddenFieldBlock", ""], ["type", "hidden", 3, "formControl"], [1, "widget", "form-group"], [1, "horizontal", "control-label"], ["style", "color:red;", 4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["autocomplete", "off", 1, "text-widget.id", "textline-widget", "form-control", 3, "name", "formControl", "ngbTypeahead"], ["inputField", ""], ["type", "hidden", 3, "formControl", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"]], template: function SearchWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchWidgetComponent_input_0_Template, 1, 2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchWidgetComponent_ng_template_1_Template, 11, 18, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.widget.id === "hidden")("ngIfElse", _r1);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTypeahead], styles: ["input[_ngcontent-%COMP%]:invalid {\r\n    border-left-color: red;\r\n    border-left-width: 2px;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:valid {\r\n    border-left-color: green;\r\n    border-left-width: 2px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNlYXJjaC13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmludmFsaWQge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OnZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAycHg7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 6517:
/*!************************************************************************!*\
  !*** ./src/app/customWidgets/select-widget/select-widget.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWidgetComponent": () => (/* binding */ SelectWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);






function SelectWidgetComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectWidgetComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r7.schema.description, "");
} }
function SelectWidgetComponent_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r8.schema.examples, "");
} }
function SelectWidgetComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectWidgetComponent_ng_template_4_div_0_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectWidgetComponent_ng_template_4_div_1_Template, 4, 1, "div", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.examples);
} }
function SelectWidgetComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r1);
} }
function SelectWidgetComponent_select_7_ng_container_1_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r13.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r13.description);
} }
function SelectWidgetComponent_select_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectWidgetComponent_select_7_ng_container_1_option_1_Template, 2, 2, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.schema.oneOf);
} }
function SelectWidgetComponent_select_7_ng_template_2_option_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r15);
} }
function SelectWidgetComponent_select_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SelectWidgetComponent_select_7_ng_template_2_option_0_Template, 2, 2, "option", 14);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.schema.enum);
} }
function SelectWidgetComponent_select_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectWidgetComponent_select_7_ng_container_1_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectWidgetComponent_select_7_ng_template_2_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.control)("disableControl", ctx_r4.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx_r4.schema.isRequired || null)("name", ctx_r4.name)("id", ctx_r4.id)("disabled", ctx_r4.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.schema.oneOf)("ngIfElse", _r10);
} }
function SelectWidgetComponent_select_8_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", option_r17.enum[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", option_r17.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17.description, "");
} }
function SelectWidgetComponent_select_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectWidgetComponent_select_8_option_1_Template, 2, 3, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.control)("disableControl", ctx_r5.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r5.name)("id", ctx_r5.id)("disabled", ctx_r5.schema.readOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.schema.items.oneOf);
} }
function SelectWidgetComponent_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 17);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r6.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r6.name);
} }
class SelectWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.ControlWidget {
}
SelectWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵSelectWidgetComponent_BaseFactory; return function SelectWidgetComponent_Factory(t) { return (ɵSelectWidgetComponent_BaseFactory || (ɵSelectWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SelectWidgetComponent)))(t || SelectWidgetComponent); }; }();
SelectWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectWidgetComponent, selectors: [["sf-select-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 7, consts: [[1, "widget", "form-group"], [1, "horizontal", "control-label"], ["style", "color:red;", 4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["multiple", "", "class", "form-control", 3, "formControl", "disableControl", 4, "ngIf"], ["type", "hidden", 3, "formControl", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"], [1, "form-control", 3, "formControl", "disableControl"], [4, "ngIf", "ngIfElse"], ["use_enum", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], ["multiple", "", 1, "form-control", 3, "formControl", "disableControl"], ["type", "hidden", 3, "formControl"]], template: function SelectWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectWidgetComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectWidgetComponent_ng_template_4_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectWidgetComponent_button_6_Template, 2, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectWidgetComponent_select_7_Template, 4, 8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectWidgetComponent_select_8_Template, 2, 6, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectWidgetComponent_input_9_Template, 1, 2, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.schema.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.description || ctx.schema.examples);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.type != "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.type === "array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.readOnly);
    } }, dependencies: [ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.DisableControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip], encapsulation: 2 });


/***/ }),

/***/ 2639:
/*!************************************************************************!*\
  !*** ./src/app/customWidgets/string-widget/string-widget.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringWidgetComponent": () => (/* binding */ StringWidgetComponent)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);





function StringWidgetComponent_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r0.name);
} }
function StringWidgetComponent_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StringWidgetComponent_ng_template_1_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r10.schema.description, "");
} }
function StringWidgetComponent_ng_template_1_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Examples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r11.schema.examples, "");
} }
function StringWidgetComponent_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StringWidgetComponent_ng_template_1_ng_template_4_div_0_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StringWidgetComponent_ng_template_1_ng_template_4_div_1_Template, 4, 1, "div", 12);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.schema.examples);
} }
function StringWidgetComponent_ng_template_1_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _r4);
} }
function StringWidgetComponent_ng_template_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Value must match the pattern: ", ctx_r8.schema.pattern.substring(1, ctx_r8.schema.pattern.toString().length - 1), "");
} }
function StringWidgetComponent_ng_template_1_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 2);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r9.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx_r9.name);
} }
function StringWidgetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StringWidgetComponent_ng_template_1_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StringWidgetComponent_ng_template_1_ng_template_4_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StringWidgetComponent_ng_template_1_button_6_Template, 2, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StringWidgetComponent_ng_template_1_span_9_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StringWidgetComponent_ng_template_1_input_10_Template, 1, 2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.schema.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.isRequired);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.description || ctx_r2.schema.examples);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r2.name)("formControl", ctx_r2.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("readonly", ctx_r2.schema.widget.id !== "color" && ctx_r2.schema.readOnly ? true : null)("type", !ctx_r2.schema.widget.id || ctx_r2.schema.widget.id === "string" ? "text" : ctx_r2.schema.widget.id)("id", ctx_r2.id)("placeholder", ctx_r2.schema.placeholder)("maxLength", ctx_r2.schema.maxLength || null)("minLength", ctx_r2.schema.minLength || null)("required", ctx_r2.schema.isRequired || null)("disabled", ctx_r2.schema.widget.id == "color" && ctx_r2.schema.readOnly ? true : null)("pattern", ctx_r2.schema.pattern ? ctx_r2.schema.pattern : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.checkIfPatternMatch(_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.schema.widget.id === "color" && ctx_r2.schema.readOnly);
} }
class StringWidgetComponent extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_1__.ControlWidget {
    checkIfPatternMatch(value) {
        var patt = new RegExp(this.schema.pattern);
        if (patt.test(value))
            return true;
        return false;
    }
}
StringWidgetComponent.ɵfac = /*@__PURE__*/ function () { let ɵStringWidgetComponent_BaseFactory; return function StringWidgetComponent_Factory(t) { return (ɵStringWidgetComponent_BaseFactory || (ɵStringWidgetComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](StringWidgetComponent)))(t || StringWidgetComponent); }; }();
StringWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StringWidgetComponent, selectors: [["sf-string-widget"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [["type", "hidden", 3, "formControl", 4, "ngIf", "ngIfElse"], ["notHiddenFieldBlock", ""], ["type", "hidden", 3, "formControl"], [1, "widget", "form-group"], [1, "horizontal", "control-label"], ["style", "color:red;", 4, "ngIf"], ["tipContent", ""], ["id", "HelpButton", "type", "button", "class", "btn btn-outline-info mr-2", "placement", "right", 3, "ngbTooltip", 4, "ngIf"], ["autocomplete", "off", 1, "text-widget.id", "textline-widget", "form-control", 3, "name", "formControl"], ["inputField", ""], ["type", "hidden", 3, "formControl", 4, "ngIf"], [2, "color", "red"], [4, "ngIf"], ["id", "HelpButton", "type", "button", "placement", "right", 1, "btn", "btn-outline-info", "mr-2", 3, "ngbTooltip"]], template: function StringWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StringWidgetComponent_input_0_Template, 1, 2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StringWidgetComponent_ng_template_1_Template, 11, 17, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.schema.widget.id === "hidden")("ngIfElse", _r1);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip], styles: ["input[_ngcontent-%COMP%]:invalid {\r\n  border-left-color: red;\r\n  border-left-width: 2px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:valid {\r\n  border-left-color: green;\r\n  border-left-width: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy13aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InN0cmluZy13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmludmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZWQ7XHJcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcclxufVxyXG5cclxuaW5wdXQ6dmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItbGVmdC13aWR0aDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4343:
/*!****************************************************!*\
  !*** ./src/app/customWidgets/widgets-registery.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetsRegistry": () => (/* binding */ WidgetsRegistry)
/* harmony export */ });
/* harmony import */ var ngx_schema_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-schema-form */ 1226);
/* harmony import */ var _array_widget_array_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-widget/array-widget.component */ 326);
/* harmony import */ var _boolean_widget_boolean_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean-widget/boolean-widget.component */ 8329);
/* harmony import */ var _integer_widget_integer_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integer-widget/integer-widget.component */ 103);
/* harmony import */ var _object_widget_object_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-widget/object-widget.component */ 6748);
/* harmony import */ var _search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-widget/search-widget.component */ 6029);
/* harmony import */ var _select_widget_select_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-widget/select-widget.component */ 6517);
/* harmony import */ var _string_widget_string_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string-widget/string-widget.component */ 2639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);









class WidgetsRegistry extends ngx_schema_form__WEBPACK_IMPORTED_MODULE_7__.DefaultWidgetRegistry {
    constructor() {
        super();
        this.register('string', _string_widget_string_widget_component__WEBPACK_IMPORTED_MODULE_6__.StringWidgetComponent);
        this.register('array', _array_widget_array_widget_component__WEBPACK_IMPORTED_MODULE_0__.ArrayWidgetComponent);
        this.register('object', _object_widget_object_widget_component__WEBPACK_IMPORTED_MODULE_3__.ObjectWidgetComponent);
        this.register('boolean', _boolean_widget_boolean_widget_component__WEBPACK_IMPORTED_MODULE_1__.BooleanWidgetComponent);
        this.register('integer', _integer_widget_integer_widget_component__WEBPACK_IMPORTED_MODULE_2__.IntegerWidgetComponent);
        this.register('select', _select_widget_select_widget_component__WEBPACK_IMPORTED_MODULE_5__.SelectWidgetComponent);
        this.register('search', _search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_4__.SearchWidgetComponent);
        // this.register('customString', StringWidgetComponent);
        // this.register('customArray', ArrayWidgetComponent);
        // this.register('customObject', ObjectWidgetComponent);
        // this.register('customBoolean', BooleanWidgetComponent);
        // this.register('customInteger', IntegerWidgetComponent);
        // this.register('customSelect', SelectWidgetComponent);
        // this.register('customSearch', SearchWidgetComponent);
    }
}
WidgetsRegistry.ɵfac = function WidgetsRegistry_Factory(t) { return new (t || WidgetsRegistry)(); };
WidgetsRegistry.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: WidgetsRegistry, factory: WidgetsRegistry.ɵfac });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
