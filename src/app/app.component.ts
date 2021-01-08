import { Component } from '@angular/core';
import { FormProperty, PropertyGroup } from 'ngx-schema-form';
import { ButtonComponent } from 'ngx-schema-form/lib/template-schema/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 value: any;

 ngOnInit()
  {
    

    window.onload = () => {
        var btnAdd0 : HTMLElement = document.getElementsByClassName('array-add-button')[0] as HTMLElement;
        var btnAdd2 : HTMLElement = document.getElementsByClassName('array-add-button')[2] as HTMLElement;
        btnAdd0.addEventListener("click", () => {
          btnAdd2.click();
        });
        var btnRemove0 : HTMLElement = document.getElementsByClassName('array-remove-button')[0] as HTMLElement;
        var btnRemove2 : HTMLElement = document.getElementsByClassName('array-remove-button')[2] as HTMLElement;
        btnRemove0.addEventListener("click", () => {
          btnRemove2.click();
          alert("clicked!");
        });
  }
};


mySchema = 
  {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://raw.githubusercontent.com/usnistgov/WIPP-Plugins-base-templates/master/plugin-manifest/schema/wipp-plugin-manifest-schema.json",
  "type": "object",
  "title": "WIPP Plugin manifest",
  "default": null,
  "required": [
    "name",
    "version",
    "title",
    "description",
    "containerId",
    "inputs",
    "outputs",
    "ui"
  ],
  "properties": {
    "name": {
      "$id": "#/properties/name",
      "type": "string",
      "title": "Name of the plugin",
      "default": "",
      "examples": [
        "My Awesome Plugin"
      ],
      "minLength": 1,
      "pattern": "^(.*)$"
    },
    "version": {
      "$id": "#/properties/version",
      "type": "string",
      "title": "Plugin version",
      "default": "",
      "examples": [
        "1.0.0"
      ],
      "minLength": 1,
      "pattern": "^(.*)$"
    },
    "title": {
      "$id": "#/properties/title",
      "type": "string",
      "title": "Plugin title",
      "default": "",
      "examples": [
        "My really awesome plugin"
      ],
      "minLength": 1,
      "pattern": "^(.*)$"
    },
    "description": {
      "$id": "#/properties/description",
      "type": "string",
      "title": "Description",
      "default": "",
      "examples": [
        "My awesome segmentation algorithm"
      ],
      "minLength": 1,
      "pattern": "^(.*)$"
    },
    "author": {
      "$id": "#/properties/author",
      "type": "string",
      "title": "Author(s)",
      "default": "",
      "examples": [
        "FirstName LastName"
      ],
      "pattern": "^(.*)$"
    },
    "institution": {
      "$id": "#/properties/institution",
      "type": "string",
      "title": "Institution",
      "default": "",
      "examples": [
        "National Institute of Standards and Technology"
      ],
      "pattern": "^(.*)$"
    },
    "repository": {
      "$id": "#/properties/repository",
      "type": "string",
      "title": "Source code repository",
      "default": "",
      "examples": [
        "https://github.com/usnistgov/WIPP"
      ],
      "format": "uri"
    },
    "website": {
      "$id": "#/properties/website",
      "type": "string",
      "title": "Website",
      "default": "",
      "examples": [
        "http://usnistgov.github.io/WIPP"
      ],
      "format": "uri"
    },
    "citation": {
      "$id": "#/properties/citation",
      "type": "string",
      "title": "Citation",
      "default": "",
      "examples": [
        "Peter Bajcsy, Joe Chalfoun, and Mylene Simon (2018). Web Microanalysis of Big Image Data. Springer-Verlag International"
      ],
      "pattern": "^(.*)$"
    },
    "containerId": {
      "$id": "#/properties/containerId",
      "type": "string",
      "title": "ContainerId",
      "placeholder": "Docker image ID",
      "default": "",
      "examples": [
        "wipp/example-plugin:1.0.0"
      ],
      "pattern": "^(.*)$"
    },
    "inputs": {
      "$id": "#/properties/inputs",
      "type": "array",
      "title": "List of Inputs",
      "placeholder": "Defines inputs to the plugin",
      "default": null,
      "uniqueItems": true,
      "items": {
        "$id": "#/properties/inputs/items",
        "type": "object",
        "title": "Input",
        "description": "Plugin input",
        "default": null,
        "required": [
          "name",
          "type",
          "description"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/inputs/items/properties/name",
            "type": "string",
            "title": "Input name",
            "placeholder": "Input name as expected by the plugin CLI",
            "default": "",
            "examples": [
              "inputImages",
              "fileNamePattern",
              "thresholdValue"
            ],
            "pattern": "^[a-zA-Z0-9][-a-zA-Z0-9]*$"
          },
          "type": {
            "$id": "#/properties/inputs/items/properties/type",
            "type": "string",
            "widget": {
              "id": "select"
            },
            "enum": [
              "collection",
              "stitchingVector",
              "tensorflowModel",
              "csvCollection",
              "pyramid",
              "notebook",
              "string",
              "number",
              "integer",
              "enum",
              "array",
              "boolean"
            ],
            "title": "Input Type",
            "examples": [
              "collection",
              "string",
              "number"
            ],
            "required" : true,
          },
          "description": {
            "$id": "#/properties/inputs/items/properties/description",
            "type": "string",
            "title": "Input description",
            "examples": [
              "Input Images"
            ],
            "pattern": "^(.*)$"
          },
          "required": {
            "$id": "#/properties/inputs/items/properties/required",
            "type": "boolean",
            "title": "Required input",
            "description": "Whether an input is required or not",
            "default": true,
            "examples": [
              true
            ]
          }
        },

      },
    },
    
    "outputs": {
      "$id": "#/properties/outputs",
      "type": "array",
      "title": "List of Outputs",
      "description": "Defines the outputs of the plugin",
      "default": null,
      "items": {
        "$id": "#/properties/outputs/items",
        "type": "object",
        "title": "Plugin output",
        "default": null,
        "required": [
          "name",
          "type",
          "description"
        ],
        "properties": {
          "name": {
            "$id": "#/properties/outputs/items/properties/name",
            "type": "string",
            "title": "Output name",
            "default": "",
            "examples": [
              "outputCollection"
            ],
            "pattern": "^[a-zA-Z0-9][-a-zA-Z0-9]*$"
          },
          "type": {
            "$id": "#/properties/outputs/items/properties/type",
            "type": "string",
            "widget": {
              "id": "select"
            },
            "enum": [
              "collection",
              "stitchingVector",
              "tensorflowModel",
              "tensorboardLogs",
              "csvCollection",
              "pyramid"
            ],
            "title": "Output type",
            "examples": [
              "stitchingVector",
              "collection"
            ]
          },
          "description": {
            "$id": "#/properties/outputs/items/properties/description",
            "type": "string",
            "title": "Output description",
            "examples": [
              "Output collection"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    },
      "ui": {
      "$id": "#/properties/ui",
      "type": "array",
      "title": "Plugin form UI definition",
      "items": 
        {
            "type": "object",
            "title": "List of UI definitions",
            "required": [
              "key"
            ],
            "properties": {
              "key": {
                "$id": "#/properties/ui/items/properties/key",
                "type": "string",
                "title": "UI key ",
                "description": "Key of the input which this UI definition applies to, the expected format is 'inputs.inputName'. Special keyword 'fieldsets' can be used to define arrangement of inputs by sections.",
                "examples": [
                  "inputs.inputImages", "inputs.fileNamPattern", "fieldsets"
                ],
                "oneOf": [
                    {"pattern": "^inputs\\.[a-zA-Z0-9][-a-zA-Z0-9]*$"},
                    {"const": "fieldsets"}
                ]
              }
            },
          "allOf": [
            {
              "if": {
                "properties": { "key": { "pattern": "^inputs\\.[a-zA-Z0-9][-a-zA-Z0-9]*$" } }
              },
              "then": {
                "properties": 
                  { 
                    "title": {
                        "$id": "#/properties/ui/items/properties/title",
                        "type": "string",
                        "title": "Input label",
                        "default": "",
                        "examples": [
                          "Input images: "
                        ],
                        "pattern": "^(.*)$"
                      },
                      "description": {
                        "$id": "#/properties/ui/items/properties/description",
                        "type": "string",
                        "title": "Input placeholder",
                        "default": "",
                        "examples": [
                          "Pick a collection..."
                        ],
                        "pattern": "^(.*)$"
                      },
                      "condition": {
                        "$id": "#/properties/ui/items/properties/condition",
                        "type": "string",
                        "title": "Input visibility condition",
                        "description": "Definition of when this field is visible or not, depending on the value of another input, the expected format for the condition is 'model.inputs.inputName==value'",
                        "default": "",
                        "examples": [
                          "model.inputs.thresholdtype=='Manual'"
                        ],
                        "pattern": "^(.*)$"
                      },
                      "default": {
                        "$id": "#/properties/ui/items/properties/default",
                        "type": ["string", "number", "integer", "boolean"],
                        "title": "Input default value",
                        "default": "",
                        "examples": [
                          5, false, ".ome.tif"
                        ]
                      },
                      "hidden": {
                        "$id": "#/properties/ui/items/properties/hidden",
                        "type": "boolean",
                        "title": "Hidden input",
                        "description": "Hidden input will not be displayed on the form, but can be used in conjunction with the 'default' or 'bind' properties to define default or automatically set parameters",
                        "default": false,
                        "examples": [
                          true, false
                        ]
                      },
                      "bind": {
                        "$id": "#/properties/ui/items/properties/bind",
                        "type": "string",
                        "title": "Bind input value to another input",
                        "examples": [
                          "gridWidth"
                        ]
                      }
                  },
                  "required": [
                      "title"
                    ]
              }
            },
            {
              "if": {
                "properties": { "key": { "const": "fieldsets" } }
              },
              "then": {
                "properties": 
                  { 
                      "fieldsets":
                      {
                           "description": "A list of definitions representing sections of input fields.",
                            "type": "array",
                            "items": {
                              "description": "A section of input fields.",
                              "type": "object",
                              "properties": {
                                "title": {
                                  "type": "string",
                                  "description": "The label of the section.",
                                  "examples": [
                                      "Input images selection"
                                  ]
                                },
                                "fields": {
                                  "description": "A list of input names representing input fields that belong to this section.",
                                  "type": "array",
                                  "items": {
                                    "type": "string"
                                  },
                                  "uniqueItems": true,
                                  "minItems": 1,
                                  "examples": [
                                      "inputImages, fileNamePattern"
                                  ]
                                }
                              },
                            "uniqueItems": true,
                            "default": [],
                            "minItems": 1,
                            "required": [
                                "title", "fields"
                            ]
                          } 
                      }
                },
                "required": [
                    "fieldsets"
                ]
              }
            }
          ]
        }
    }
    }
  };


  myFieldBindings = {
    '/inputs': [
      {
        'input': (event, formProperty: FormProperty) => {
          const parent: PropertyGroup = formProperty.findRoot();

          /**
           * Set the input value for the children
           */
          
          let i :number =0;

          for (const objectProperty of parent.getProperty('inputs').properties)
          {
            
            const idKey : string = "ui/" + i + "/key";
            const child2: FormProperty = objectProperty.properties['name'];
            const child1: FormProperty = parent.getProperty(idKey);
            child1.setValue(child2.value, false);
            ++i;
          }

         
          //child2.setValue(formProperty.value, false);

          /**
           * Get the input value for all the children
           */
        } 
      }
    ]
  };


  /*myValidators = {
    "/inputs/items/properties/name"
  }*/
}

