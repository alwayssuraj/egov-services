var dat = {
    "wc.create": {
        "numCols": 12 / 3,
        "version": "v1",
        "url": "/wcms-connection/connection/_create",
        "idJsonPath": "Connection[0].acknowledgementNumber",
        "useTimestamp": true,
        "tenantIdRequired": true, //Instead of boolean value give json path
        "objectName": "Connection",
        "level": 0,
        "groups": [{
              "label": "wc.create.groups.applicationParticular.title", //Cut short labels by taking initial path from parent
              "name": "applicationParticular", //Follow Title case pattern
              "children": [],
              "multiple": false,
              "fields": [
                {
                  "name": "With Property",
                  "jsonPath": "Connection[0].withProperty",
                  "label": "wc.group.withProperty",
                  "pattern": "",
                  "type": "radio",
                  "isRequired": false,
                  "isDisabled": false,
                  "requiredErrMsg": "",
                  "patternErrMsg": "",
                  "values": [{"label":"wc.group.withProperty", "value":true},{"label":"wc.group.withoutProperty", "value":false}],
                  "defaultValue":false,
                  "showHideFields": [{
                   "ifValue": false,
                   "hide": [{
                    "name": "applicantDetails",
                    "isGroup": true,
                    "isField": false
                   }],
                   "show": [{
                   "name": "applicantDetailsWithProp",
                   "isGroup": true,
                   "isField": false
                 }]
              }]
          }]
        },
        {
          "label": "wc.create.groups.applicantDetails.title", //Cut short labels by taking initial path from parent
          "name": "applicantDetailsWithProp", //Follow Title case pattern,
          "hide":false,
          "multiple": false,
          "fields": [{
              "name": "NameOfApplicant",
              "jsonPath": "Connection[0].connectionOwner.name",
              "label": "wc.create.groups.applicantDetails.nameOfApplicant",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "acknowledgementNumber",
              "jsonPath": "Connection[0].acknowledgementNumber",
              "label": "wc.create.groups.applicantDetails.acknowledgementNumber",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": true,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "MobileNumber",
              "jsonPath": "Connection[0].connectionOwner.mobileNumber",
              "label": "wc.create.groups.applicantDetails.mobileNumber",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Email",
              "jsonPath": "Connection[0].connectionOwner.emailId",
              "label": "wc.create.groups.applicantDetails.email",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "isHidden": false,
              "defaultValue": ""
            },
            {
              "name": "AadharNumber",
              "jsonPath": "Connection[0].connectionOwner.aadhaarNumber",
              "label": "wc.create.groups.applicantDetails.adharNumber",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "gender",
              "jsonPath": "Connection[0].connectionOwner.gender",
              "label": "employee.Employee.fields.User.gender",
              "pattern": "",
              "type": "label",
              "url": "/egov-common-masters/genders/_search?|$.Gender.*|$.Gender.*",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "AddressNo",
              "jsonPath": "Connection[0].houseNumber",
              "label": "wc.create.groups.applicantDetails.addressNumber",
              "pattern": "^[\s.]*([^\s.][\s.]*){0,16}$",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Address",
              "jsonPath": "Connection[0].address.addressLine1",
              "label": "wc.create.groups.applicantDetails.address",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "City",
              "jsonPath": "Connection[0].address.city",
              "label": "employee.Employee.fields.city",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "PinCode",
              "jsonPath": "Connection[0].address.pinCode",
              "label": "pt.create.groups.propertyAddress.fields.pin",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Locality",
              "jsonPath": "Connection[0].connectionLocation.locationBoundary.id",
              "label": "wc.create.groups.applicantDetails.locality",
              "pattern": "",
              "type": "label",
              "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.id|$.Boundary.*.name",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "wardName",
              "jsonPath": "Connection[0].connectionLocation.adminBoundary.id",
              "label": "wc.create.groups.fields.ward",
              "pattern": "",
              "type": "label",
              "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=WARD&hierarchyTypeName=ADMINISTRATION|$.Boundary.*.id|$.Boundary.*.name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "zoneName",
              "jsonPath": "Connection[0].connectionLocation.revenueBoundary.id",
              "label": "wc.create.groups.fields.zone",
              "pattern": "",
              "type": "label",
              "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.id|$.Boundary.*.name",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Primary Owner",
              "jsonPath": "Connection[0].connectionOwner.isPrimaryOwner",
              "label": "pt.create.groups.ownerDetails.fields.primaryOwner",
              "pattern": "",
              "type": "label",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "values": [{"label":"pt.create.groups.ownerDetails.fields.primaryOwner", "value":true},{"label":"pt.create.groups.ownerDetails.fields.secondaryOwner", "value":false}],
              "defaultValue":true
            }]
          },
            {
            "label": "wc.create.groups.applicationParticular.title", //Cut short labels by taking initial path from parent
            "name": "applicantDetails", //Follow Title case pattern
            "children": [],
            "multiple": false,
            "hide":true,
            "fields": [{
                    "name": "acknowledgementNumber",
                    "jsonPath": "Connection[0].acknowledgementNumber",
                    "label": "wc.create.groups.applicantDetails.acknowledgementNumber",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "AssessmentNumber",
                    "jsonPath": "Connection[0].property.propertyidentifier",
                    "label": "wc.create.groups.applicantDetails.propertyIdentifier",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "NameOfApplicant",
                    "jsonPath": "Connection[0].property.nameOfApplicant",
                    "label": "wc.create.groups.applicantDetails.nameOfApplicant",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "MobileNumber",
                    "jsonPath": "Connection[0].property.mobileNumber",
                    "label": "wc.create.groups.applicantDetails.mobileNumber",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "Email",
                    "jsonPath": "Connection[0].property.email",
                    "label": "wc.create.groups.applicantDetails.email",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": "",
                    "isHidden": false,
                    "defaultValue": ""
                },
                {
                    "name": "AadharNumber",
                    "jsonPath": "Connection[0].property.adharNumber",
                    "label": "wc.create.groups.applicantDetails.adharNumber",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "Locality",
                    "jsonPath": "Connection[0].property.locality",
                    "label": "wc.create.groups.applicantDetails.locality",
                    "pattern": "",
                    "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$.Boundary.*.boundaryNum|$.Boundary.*.name",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "Address",
                    "jsonPath": "Connection[0].property.address",
                    "label": "wc.create.groups.applicantDetails.address",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "Zone",
                    "jsonPath": "Connection[0].property.zone",
                    "label": "wc.create.groups.applicantDetails.zone",
                    "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=ZONE&hierarchyTypeName=REVENUE|$.Boundary.*.boundaryNum|$.Boundary.*.name",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "adharNumber",
                    "jsonPath": "Connection[0].property.adharNumber",
                    "label": "wc.create.groups.applicantDetails.noOfFloors",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                },
                {
                    "name": "propertyTaxDue",
                    "jsonPath": "Connection[0].property.propertyTaxDue",
                    "label": "wc.create.groups.applicantDetails.propertyTaxDue",
                    "pattern": "",
                    "type": "label",
                    "isRequired": false,
                    "isDisabled": true,
                    "requiredErrMsg": "",
                    "patternErrMsg": ""
                }]
        },
        {
          "label": "wc.create.groups.connectionDetails.title",
          "name": "connectionDetails",
          "multiple": false,
          "fields": [
            {
  						"name": "UsageType",
  						"jsonPath": "Connection[0].usageType",
  						"label": "wc.create.groups.connectionDetails.usageType",
  						"pattern": "",
  						"type": "singleValueList",
  						"url": "/wcms/masters/usagetypes/_search?&active=true|$..code|$..name",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": "",
              "depedants": [{
  								"jsonPath": "Connection[0].subUsageType",
  								"type": "dropDown",
  								"pattern": "/wcms/masters/usagetypes/_search?&isSubUsageType=true&parent={Connection[0].usageType}|$..code|$..name"
  							}]
  					},
  					{
  						"name": "SubUsageType",
  						"jsonPath": "Connection[0].subUsageType",
  						"label": "wc.create.groups.connectionDetails.subUsageType",
  						"pattern": "",
  						"type": "singleValueList",
  						"isRequired": true,
  						"isDisabled": false,
  						"requiredErrMsg": "",
  						"patternErrMsg": ""
  					},
            {
              "name": "hscPipeSizeType",
              "jsonPath": "Connection[0].hscPipeSizeType",
              "label": "wc.create.groups.connectionDetails.hscPipeSizeType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "convertToString":true,
              "url":"/wcms/masters/pipesizes/_search?|$..sizeInMilimeter|$..sizeInInch"
            },
            {
              "name": "applicationType",
              "jsonPath": "Connection[0].applicationType",
              "label": "wc.create.groups.connectionDetails.applicationType",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "isHidden": true,
              "defaultValue": "NEWCONNECTION",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "connectionStatus",
              "jsonPath": "Connection[0].connectionStatus",
              "label": "wc.create.groups.connectionDetails.applicationType",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "isHidden": true,
              "defaultValue": "INPROGRESS",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "billingType",
              "jsonPath": "Connection[0].billingType",
              "label": "wc.create.groups.connectionDetails.billingType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "url": "/wcms-connection/connection/_getbillingtypes?|$..key|$..object",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "ConnectionType",
              "jsonPath": "Connection[0].connectionType",
              "label": "wc.create.groups.connectionDetails.connectionType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "url": "/wcms-connection/connection/_getconnectiontypes?|$..key|$..object",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "SourceType",
              "jsonPath": "Connection[0].sourceType",
              "label": "wc.create.groups.connectionDetails.sourceType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "url": "/wcms/masters/sourcetypes/_search?|$..name|$..name",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "supplyType",
            //   "jsonPath": "Connection[0].supplyType",
            //   "label": "wc.create.groups.connectionDetails.supplyType",
            //   "pattern": "",
            //   "type": "singleValueList",
            //   "isRequired": false,
            //   "isDisabled": false,
            //   "url": "/wcms/masters/supplytype/_search?|$..name|$..name",
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "StorageReservoir",
              "jsonPath": "Connection[0].storageReservoir",
              "label": "wc.create.groups.fields.storageType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": true,
              "isDisabled": false,
              "url": "/wcms/masters/storagereservoirs/_search?|$..name|$..name",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "waterTreatment",
              "jsonPath": "Connection[0].waterTreatment",
              "label": "wc.create.groups.connectionDetails.waterTreatment",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "url": "/wcms/masters/treatmentplants/_search?|$..name|$..name",
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "sumpCapacity",
              "jsonPath": "Connection[0].sumpCapacity",
              "label": "wc.create.groups.connectionDetails.fields.sumpCapacity",
              "pattern": "^(0|[1-9][0-9]*)$",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "numberOfPersons",
              "jsonPath": "Connection[0].numberOfPersons",
              "label": "wc.create.groups.connectionDetails.fields.numberOfPersons",
              "type": "number",
              "pattern":"^(0|[1-9][0-9]*)$",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": "",
              "depedants":[{
                  "jsonPath":"Connection.numberOfFamily",
                  "type":"textField",
                  "pattern":"getVal('Connection.numberOfPersons')!=''? (Math.ceil(getVal('Connection.numberOfPersons')/4)):0",
                  "rg":"",
                  "isRequired": false,
                  "requiredErrMsg": "",
                  "patternErrMsg": ""
                }]
            },
            {
              "name": "numberOfFamily",
              "jsonPath": "Connection[0].numberOfFamily",
              "label": "wc.create.numberOfFamily",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": true,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Sequence No",
              "jsonPath": "Connection[0].billSequenceNumber",
              "label": "wc.create.groups.connectionDetails.fields.billingNumber",
              "pattern": "^(0|[1-9][0-9]*)$",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "PlumberName",
              "jsonPath": "Connection[0].plumberName",
              "label": "wc.create.groups.connectionDetails.fields.plumberName",
              "pattern": "",
              "type": "textarea",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "NoOfTaps",
              "jsonPath": "Connection[0].numberOfTaps",
              "label": "wc.create.groups.connectionDetails.fields.noOfTaps",
              "pattern": "^(0|[1-9][0-9]*)$",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "BuildingName",
              "jsonPath": "Connection[0].connectionLocation.buildingName",
              "label": "wc.create.groups.connectionDetails.fields.buildingName",
              "pattern": "^([a-zA-Z0-9_-\\s]){0,24}$",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "BuildingAddress",
              "jsonPath": "Connection[0].connectionLocation.billingAddress",
              "label": "wc.create.groups.connectionDetails.fields.buildingAddress",
              "pattern": "^([a-zA-Z0-9_-\\s]){0,256}$",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "RoadName",
              "jsonPath": "Connection[0].connectionLocation.roadName",
              "label": "wc.create.groups.connectionDetails.fields.roadName",
              "pattern": "^([a-zA-Z0-9_-\\s]){0,32}$",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "GISNo",
              "jsonPath": "Connection[0].connectionLocation.gisNumber",
              "label": "wc.create.groups.connectionDetails.fields.gISNo",
              "pattern": "^([a-zA-Z0-9_-\\s]){0,15}$",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Outside ULB",
              "jsonPath": "Connection[0].outsideULB",
              "label": "wc.create.groups.connectionDetails.fields.outSide",
              "pattern": "",
              "type": "checkbox",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        }]
  }
}

export default dat;
