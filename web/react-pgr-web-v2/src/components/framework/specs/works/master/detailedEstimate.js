var dat={
  "works.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "",
    "url": "/works-estimate/v1/detailedestimates/_search",
    "groups": [
      {
        "name": "search",
        "label": "works.search.title",
        "fields": [
          {
            "name": "sortBy",
            "jsonPath": "sortBy",
            "label": "works.create.sortBy",
            "type": "text",
            "isDisabled": false,
            "defaultValue": "id",
            "patternErrorMsg": "works.create.field.message.sortBy"
          },
          {
            "name": "detailedEstimateNumbers",
            "jsonPath": "detailedEstimateNumbers",
            "label": "works.create.detailedEstimateNumbers",
            "type": "autoCompelete",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.detailedEstimateNumbers"
          },
          {
            "name": "ids",
            "jsonPath": "ids",
            "label": "works.create.ids",
            "type": "",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.ids"
          },
          {
            "name": "fromDate",
            "jsonPath": "fromDate",
            "label": "works.create.fromDate",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.fromDate"
          },
          {
            "name": "toDate",
            "jsonPath": "toDate",
            "label": "works.create.toDate",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.toDate"
          },
          {
            "name": "department",
            "jsonPath": "department",
            "label": "works.create.department",
            "type": "multiValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.department"
          },
          {
            "name": "typeOfWork",
            "jsonPath": "typeOfWork",
            "label": "works.create.typeOfWork",
            "type": "multiValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.typeOfWork"
          },
          {
            "name": "subTypeOfWork",
            "jsonPath": "subTypeOfWork",
            "label": "works.create.subTypeOfWork",
            "type": "multiValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.subTypeOfWork"
          },
          {
            "name": "statuses",
            "jsonPath": "statuses",
            "label": "works.create.statuses",
            "type": "multiValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.statuses"
          },
          {
            "name": "workIdentificationNumbers",
            "jsonPath": "workIdentificationNumbers",
            "label": "works.create.workIdentificationNumbers",
            "type": "autoCompelete",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.workIdentificationNumbers"
          },
          {
            "name": "abstractEstimateNumbers",
            "jsonPath": "abstractEstimateNumbers",
            "label": "works.create.abstractEstimateNumbers",
            "type": "autoCompelete",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.abstractEstimateNumbers"
          },
          {
            "name": "fromAmount",
            "jsonPath": "fromAmount",
            "label": "works.create.fromAmount",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.fromAmount"
          },
          {
            "name": "toAmount",
            "jsonPath": "toAmount",
            "label": "works.create.toAmount",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.toAmount"
          },
          {
            "name": "nameOfWork",
            "jsonPath": "nameOfWork",
            "label": "works.create.nameOfWork",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.nameOfWork"
          },
          {
            "name": "wards",
            "jsonPath": "wards",
            "label": "works.create.wards",
            "type": "autoCompelete",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.wards"
          },
          {
            "name": "spillOverFlag",
            "jsonPath": "spillOverFlag",
            "label": "works.create.spillOverFlag",
            "type": "radio",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.spillOverFlag"
          },
          {
            "name": "createdBy",
            "jsonPath": "createdBy",
            "label": "works.create.createdBy",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.createdBy"
          },
          {
            "name": "currentOwner",
            "jsonPath": "currentOwner",
            "label": "works.create.currentOwner",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "patternErrorMsg": "works.create.field.message.currentOwner"
          }
        ]
      }
    ],
    "result": {
      "header": [
        {
          "label": "works.search.result.code"
        },
        {
          "label": "works.search.result.description"
        },
        {
          "label": "works.search.result.scheduleCategory"
        },
        {
          "label": "works.search.result.uom"
        }
      ],
      "values": [
        "code",
        "description",
        "nameOfWork",
        "natureOfWork.code"
      ],
      "resultPath": "detailedEstimates",
      "rowClickUrlUpdate": "/update/detailedestimates/{ids}",
      "rowClickUrlView": "/view/detailedestimates/{ids}"
    }
  },
  "works.create": {
    "numCols": 4,
    "useTimestamp": true,
    "title":"Create Detailed Estimate",
    "objectName": "detailedEstimates",
    "groups": [
      {
        "fields": [
          {
            "name": "estimateNumber",
            "jsonPath": "detailedEstimates[0].estimateNumber",
            "label": "works.create.estimateNumber",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "maxLength": 10,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "workidentificationno",
            "jsonPath": "detailedEstimates[0].projectCode.code",
            "label": "works.create.projectCode.name",
            "pattern": "",
            "type": "autoCompelete",
            "url":"works-estimate/v1/abstractestimates/_search?&|$..projectCode.code|$..projectCode.code",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "maxLength": 10,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "estimateAmount",
            "jsonPath": "detailedEstimates[0].workValue",
            "label": "works.create.workValue",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
		  }
        ]
      },
      {
        "name": "workInfo",
        "label": "works.create.group.title.workInfo",
        "fields": [
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].department.code",
            "label": "works.create.department.name",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-mdms-service/v1/_get?&masterName=Department&moduleName=common-masters|$..code|$..name",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "isStateLevel":true
          },
          {
            "name": "estimateDate",
            "jsonPath": "detailedEstimates[0].estimateDate",
            "label": "works.create.estimateDate",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].natureOfWork.code",
            "label": "works.create.natureOfWork",
            "type": "singleValueList",
            "url": "/egov-mdms-service/v1/_get?&masterName=NatureOfWork&moduleName=Works|$..code|$..name",
            "isRequired": false,
            "isDisabled": true,
            "requiredErrMsg": "",
            "patternErrMsg": "",
            "isStateLevel":true,
            "patternErrorMsg": "works.create.field.message.code"
          },
          {
            "name": "ward",
            "jsonPath": "detailedEstimates[0].ward.code",
            "label": "works.create.ward",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?tenantId=default&boundaryTypeName=Ward&hierarchyTypeName=ADMINISTRATION|$..code|$..name",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "locality",
            "jsonPath": "detailedEstimates[0].locality.id",
            "label": "works.create.locality",
            "pattern": "",
            "type": "singleValueList",
            "url": "/egov-location/boundarys/boundariesByBndryTypeNameAndHierarchyTypeName?&boundaryTypeName=LOCALITY&hierarchyTypeName=LOCATION|$..id|$..name",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "workCategory",
            "jsonPath": "detailedEstimates[0].workCategory",
            "label": "works.create.workCategory",
            "pattern": "",
            "type": "singleValueList",
            "defaultValue":[
              {key: null, value: "-- Please Select --"},
              {
                  "key": "NON_SLUM",
                  "value": "NON SLUM"
              },
              {
                  "key": "NOTIFIED_SLUM",
                  "value": "NOTIFIED SLUM"
              },
              {
                  "key": "NON_NOTIFIED_SLUM",
                  "value": "NON NOTIFIED SLUM"
              },
            ],
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "beneficiary",
            "jsonPath": "detailedEstimates[0].beneficiary",
            "label": "works.create.beneficiary",
            "pattern": "",
            "type": "singleValueList",
            "defaultValue":[
              {key: null, value: "-- Please Select --"},
              {
                  "key": "SC",
                  "value": "SC"
              },
              {
                  "key": "ST",
                  "value": "ST"
              },
              {
                  "key": "BC",
                  "value": "BC"
              },
              {
                  "key": "MINORITY",
                  "value": "MINORITY"
              },
              {
                  "key": "WOMEN_CHILDREN_WELFARE",
                  "value": "WOMEN CHILDREN WELFARE"
              },
              {
                  "key": "GENERAL",
                  "value": "GENERAL"
              },
            ],
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "location",
            "jsonPath": "detailedEstimates[0].location",
            "label": "works.create.location",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "text",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 512,
            "patternErrorMsg": "works.create.field.message.location"
          },
          {
            "name": "latitude",
            "jsonPath": "detailedEstimates[0].latitude",
            "label": "works.create.latitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "longitude",
            "jsonPath": "detailedEstimates[0].longitude",
            "label": "works.create.longitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "nameOfWork",
            "jsonPath": "detailedEstimates[0].nameOfWork",
            "label": "works.create.nameOfWork",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": true,
            "defaultValue": "",
            "patternErrorMsg": "works.create.field.message.nameOfWork"
          },
          {
            "name": "description",
            "jsonPath": "detailedEstimates[0].description",
            "label": "works.create.description",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1024,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.description"
          }
        ]
      }
    ],
    "url": "/works-estimate/v1/detailedestimates/_create",
    "tenantIdRequired": true
  },
  "works.view": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "detailedEstimates",
    "groups": [
      {
        "name": "workInfo",
        "label": "works.create.group.title.workInfo",
        "fields": [
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].department.code",
            "label": "works.create.department.name",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 10,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "estimateDate",
            "jsonPath": "detailedEstimates[0].estimateDate",
            "label": "works.create.estimateDate",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].natureOfWork.code",
            "label": "works.create.natureOfWork.code",
            "pattern": "[a-zA-Z0-9-\\\\]+",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 100,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.code"
          },
          {
            "name": "ward",
            "jsonPath": "detailedEstimates[0].ward",
            "label": "works.create.ward",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "locality",
            "jsonPath": "detailedEstimates[0].locality",
            "label": "works.create.locality",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "workCategory",
            "jsonPath": "detailedEstimates[0].workCategory",
            "label": "works.create.workCategory",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "beneficiary",
            "jsonPath": "detailedEstimates[0].beneficiary",
            "label": "works.create.beneficiary",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "location",
            "jsonPath": "detailedEstimates[0].location",
            "label": "works.create.location",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 512,
            "patternErrorMsg": "works.create.field.message.location"
          },
          {
            "name": "latitude",
            "jsonPath": "detailedEstimates[0].latitude",
            "label": "works.create.latitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "longitude",
            "jsonPath": "detailedEstimates[0].longitude",
            "label": "works.create.longitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "nameOfWork",
            "jsonPath": "detailedEstimates[0].nameOfWork",
            "label": "works.create.nameOfWork",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1024,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.nameOfWork"
          },
          {
            "name": "description",
            "jsonPath": "detailedEstimates[0].description",
            "label": "works.create.description",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1024,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.description"
          }
        ]
      }
    ],
    "tenantIdRequired": true,
    "url": "/works-estimate/v1/detailedestimates/_search?ids={ids}"
  },
  "works.update": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "detailedEstimates",
    "groups": [
      {
        "name": "workInfo",
        "label": "works.create.group.title.workInfo",
        "fields": [
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].department.code",
            "label": "works.create.department.name",
            "pattern": "",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 10,
            "minLength": 1,
            "patternErrorMsg": ""
          },
          {
            "name": "estimateDate",
            "jsonPath": "detailedEstimates[0].estimateDate",
            "label": "works.create.estimateDate",
            "pattern": "",
            "type": "number",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "code",
            "jsonPath": "detailedEstimates[0].natureOfWork.code",
            "label": "works.create.natureOfWork.code",
            "pattern": "[a-zA-Z0-9-\\\\]+",
            "type": "text",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 100,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.code"
          },
          {
            "name": "ward",
            "jsonPath": "detailedEstimates[0].ward",
            "label": "works.create.ward",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "locality",
            "jsonPath": "detailedEstimates[0].locality",
            "label": "works.create.locality",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "workCategory",
            "jsonPath": "detailedEstimates[0].workCategory",
            "label": "works.create.workCategory",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "beneficiary",
            "jsonPath": "detailedEstimates[0].beneficiary",
            "label": "works.create.beneficiary",
            "pattern": "",
            "type": "singleValueList",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "location",
            "jsonPath": "detailedEstimates[0].location",
            "label": "works.create.location",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 512,
            "patternErrorMsg": "works.create.field.message.location"
          },
          {
            "name": "latitude",
            "jsonPath": "detailedEstimates[0].latitude",
            "label": "works.create.latitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "longitude",
            "jsonPath": "detailedEstimates[0].longitude",
            "label": "works.create.longitude",
            "pattern": "",
            "type": "number",
            "isRequired": false,
            "isDisabled": false,
            "defaultValue": "",
            "patternErrorMsg": ""
          },
          {
            "name": "nameOfWork",
            "jsonPath": "detailedEstimates[0].nameOfWork",
            "label": "works.create.nameOfWork",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1024,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.nameOfWork"
          },
          {
            "name": "description",
            "jsonPath": "detailedEstimates[0].description",
            "label": "works.create.description",
            "pattern": "[0-9a-zA-Z_@./#&+-/!(){}\",^$%*|=;:<>?`~ ]+",
            "type": "textarea",
            "isRequired": true,
            "isDisabled": false,
            "defaultValue": "",
            "maxLength": 1024,
            "minLength": 1,
            "patternErrorMsg": "works.create.field.message.description"
          }
        ]
      }
    ],
    "url": "/works-estimate/v1/detailedestimates/_update",
    "tenantIdRequired": true,
    "searchUrl": "/works-estimate/v1/detailedestimates/_search?ids={ids}"
  }
}
export default dat;
