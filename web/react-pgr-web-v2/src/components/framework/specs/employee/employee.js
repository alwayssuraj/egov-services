var dat = {
  "employee.create": {
  "numCols": 4,
  "version": "v1",
  "url": "/hr-employee/employees/_create",
  "idJsonPath": "",
  "useTimestamp": true,
  "tenantIdRequired": false,
  "objectName": "Employee",
  "level": 0,
  "groups": [
    {
      "label": "employee.Employee.title",
      "name": "Employee",
      "children": [
        "Assignment",
        "ServiceHistory",
        "Probation",
        "Regularisation",
        "TechnicalQualification",
        "EducationalQualification",
        "DepartmentalTest",
        "APRDetails",
        "EmployeeDocuments"
      ],
      "multiple": true,
      "fields": [
        {
          "name": "Code",
          "label": "employee.Employee.fields.code",
          "jsonPath": "Employee.code",
          "pattern": "",
          "type": "textarea",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DateOfAppointment",
          "label": "employee.Employee.fields.dateOfAppointment",
          "jsonPath": "Employee.dateOfAppointment",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DateOfJoining",
          "label": "employee.Employee.fields.dateOfJoining",
          "jsonPath": "Employee.dateOfJoining",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DateOfRetirement",
          "label": "employee.Employee.fields.dateOfRetirement",
          "jsonPath": "Employee.dateOfRetirement",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "EmployeeStatus",
          "label": "employee.Employee.fields.employeeStatus",
          "jsonPath": "Employee.employeeStatus",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "RecruitmentMode",
          "label": "employee.Employee.fields.recruitmentMode",
          "jsonPath": "Employee.recruitmentMode",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "RecruitmentType",
          "label": "employee.Employee.fields.recruitmentType",
          "jsonPath": "Employee.recruitmentType",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "RecruitmentQuota",
          "label": "employee.Employee.fields.recruitmentQuota",
          "jsonPath": "Employee.recruitmentQuota",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "RetirementAge",
          "label": "employee.Employee.fields.retirementAge",
          "jsonPath": "Employee.retirementAge",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DateOfResignation",
          "label": "employee.Employee.fields.dateOfResignation",
          "jsonPath": "Employee.dateOfResignation",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DateOfTermination",
          "label": "employee.Employee.fields.dateOfTermination",
          "jsonPath": "Employee.dateOfTermination",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "EmployeeType",
          "label": "employee.Employee.fields.employeeType",
          "jsonPath": "Employee.employeeType",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Assignments",
          "label": "employee.Employee.fields.assignments",
          "jsonPath": "Employee.assignments",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Jurisdictions",
          "label": "employee.Employee.fields.jurisdictions",
          "jsonPath": "Employee.jurisdictions",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "MotherTongue",
          "label": "employee.Employee.fields.motherTongue",
          "jsonPath": "Employee.motherTongue",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Religion",
          "label": "employee.Employee.fields.religion",
          "jsonPath": "Employee.religion",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Community",
          "label": "employee.Employee.fields.community",
          "jsonPath": "Employee.community",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Category",
          "label": "employee.Employee.fields.category",
          "jsonPath": "Employee.category",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "PhysicallyDisabled",
          "label": "employee.Employee.fields.physicallyDisabled",
          "jsonPath": "Employee.physicallyDisabled",
          "pattern": "",
          "type": "radio",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "MedicalReportProduced",
          "label": "employee.Employee.fields.medicalReportProduced",
          "jsonPath": "Employee.medicalReportProduced",
          "pattern": "",
          "type": "radio",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "LanguagesKnown",
          "label": "employee.Employee.fields.languagesKnown",
          "jsonPath": "Employee.languagesKnown",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "MaritalStatus",
          "label": "employee.Employee.fields.maritalStatus",
          "jsonPath": "Employee.maritalStatus",
          "pattern": "",
          "type": "singleValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "PassportNo",
          "label": "employee.Employee.fields.passportNo",
          "jsonPath": "Employee.passportNo",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "GpfNo",
          "label": "employee.Employee.fields.gpfNo",
          "jsonPath": "Employee.gpfNo",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Bank",
          "label": "employee.Employee.fields.bank",
          "jsonPath": "Employee.bank",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "BankBranch",
          "label": "employee.Employee.fields.bankBranch",
          "jsonPath": "Employee.bankBranch",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "BankAccount",
          "label": "employee.Employee.fields.bankAccount",
          "jsonPath": "Employee.bankAccount",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Group",
          "label": "employee.Employee.fields.group",
          "jsonPath": "Employee.group",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "PlaceOfBirth",
          "label": "employee.Employee.fields.placeOfBirth",
          "jsonPath": "Employee.placeOfBirth",
          "pattern": "",
          "type": "textarea",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "ServiceHistory",
          "label": "employee.Employee.fields.serviceHistory",
          "jsonPath": "Employee.serviceHistory",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Probation",
          "label": "employee.Employee.fields.probation",
          "jsonPath": "Employee.probation",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Regularisation",
          "label": "employee.Employee.fields.regularisation",
          "jsonPath": "Employee.regularisation",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Technical",
          "label": "employee.Employee.fields.technical",
          "jsonPath": "Employee.technical",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Education",
          "label": "employee.Employee.fields.education",
          "jsonPath": "Employee.education",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Test",
          "label": "employee.Employee.fields.test",
          "jsonPath": "Employee.test",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "APRDetails",
          "label": "employee.Employee.fields.APRDetails",
          "jsonPath": "Employee.APRDetails",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.Employee.fields.documents",
          "jsonPath": "Employee.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.userName",
          "label": "employee.Employee.fields.User.userName",
          "jsonPath": "Employee.User.userName",
          "pattern": "",
          "type": "textarea",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.authToken",
          "label": "employee.Employee.fields.User.authToken",
          "jsonPath": "Employee.User.authToken",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.salutation",
          "label": "employee.Employee.fields.User.salutation",
          "jsonPath": "Employee.User.salutation",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.name",
          "label": "employee.Employee.fields.User.name",
          "jsonPath": "Employee.User.name",
          "pattern": "",
          "type": "textarea",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.gender",
          "label": "employee.Employee.fields.User.gender",
          "jsonPath": "Employee.User.gender",
          "pattern": "",
          "type": "singleValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.mobileNumber",
          "label": "employee.Employee.fields.User.mobileNumber",
          "jsonPath": "Employee.User.mobileNumber",
          "pattern": "",
          "type": "mobileNumber",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.aadhaarNumber",
          "label": "employee.Employee.fields.User.aadhaarNumber",
          "jsonPath": "Employee.User.aadhaarNumber",
          "pattern": "[0-9]",
          "type": "aadhar",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.active",
          "label": "employee.Employee.fields.User.active",
          "jsonPath": "Employee.User.active",
          "pattern": "",
          "type": "radio",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "User.pwdExpiryDate",
          "label": "employee.Employee.fields.User.pwdExpiryDate",
          "jsonPath": "Employee.User.pwdExpiryDate",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.locale",
          "label": "employee.Employee.fields.User.locale",
          "jsonPath": "Employee.User.locale",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.type",
          "label": "employee.Employee.fields.User.type",
          "jsonPath": "Employee.User.type",
          "pattern": "",
          "type": "singleValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.accountLocked",
          "label": "employee.Employee.fields.User.accountLocked",
          "jsonPath": "Employee.User.accountLocked",
          "pattern": "",
          "type": "radio",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "User.roles",
          "label": "employee.Employee.fields.User.roles",
          "jsonPath": "Employee.User.roles",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "User.userDetails",
          "label": "employee.Employee.fields.User.userDetails",
          "jsonPath": "Employee.User.userDetails",
          "pattern": "",
          "type": "singleValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.Assignment.title",
      "name": "Assignment",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Position",
          "label": "employee.Assignment.fields.position",
          "jsonPath": "Assignment.position",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Fund",
          "label": "employee.Assignment.fields.fund",
          "jsonPath": "Assignment.fund",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Functionary",
          "label": "employee.Assignment.fields.functionary",
          "jsonPath": "Assignment.functionary",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Function",
          "label": "employee.Assignment.fields.function",
          "jsonPath": "Assignment.function",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Designation",
          "label": "employee.Assignment.fields.designation",
          "jsonPath": "Assignment.designation",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Department",
          "label": "employee.Assignment.fields.department",
          "jsonPath": "Assignment.department",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Hod",
          "label": "employee.Assignment.fields.hod",
          "jsonPath": "Assignment.hod",
          "pattern": "",
          "type": "multiValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Primary",
          "label": "employee.Assignment.fields.primary",
          "jsonPath": "Assignment.primary",
          "pattern": "",
          "type": "radio",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "FromDate",
          "label": "employee.Assignment.fields.fromDate",
          "jsonPath": "Assignment.fromDate",
          "pattern": "",
          "type": "datePicker",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "ToDate",
          "label": "employee.Assignment.fields.toDate",
          "jsonPath": "Assignment.toDate",
          "pattern": "",
          "type": "datePicker",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Grade",
          "label": "employee.Assignment.fields.grade",
          "jsonPath": "Assignment.grade",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "GovtOrderNumber",
          "label": "employee.Assignment.fields.govtOrderNumber",
          "jsonPath": "Assignment.govtOrderNumber",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.Assignment.fields.documents",
          "jsonPath": "Assignment.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.ServiceHistory.title",
      "name": "ServiceHistory",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "ServiceInfo",
          "label": "employee.ServiceHistory.fields.serviceInfo",
          "jsonPath": "ServiceHistory.serviceInfo",
          "pattern": "",
          "type": "text",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "ServiceFrom",
          "label": "employee.ServiceHistory.fields.serviceFrom",
          "jsonPath": "ServiceHistory.serviceFrom",
          "pattern": "",
          "type": "datePicker",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.ServiceHistory.fields.remarks",
          "jsonPath": "ServiceHistory.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "OrderNo",
          "label": "employee.ServiceHistory.fields.orderNo",
          "jsonPath": "ServiceHistory.orderNo",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.ServiceHistory.fields.documents",
          "jsonPath": "ServiceHistory.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.Probation.title",
      "name": "Probation",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Designation",
          "label": "employee.Probation.fields.designation",
          "jsonPath": "Probation.designation",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DeclaredOn",
          "label": "employee.Probation.fields.declaredOn",
          "jsonPath": "Probation.declaredOn",
          "pattern": "",
          "type": "datePicker",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "OrderNo",
          "label": "employee.Probation.fields.orderNo",
          "jsonPath": "Probation.orderNo",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "OrderDate",
          "label": "employee.Probation.fields.orderDate",
          "jsonPath": "Probation.orderDate",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.Probation.fields.remarks",
          "jsonPath": "Probation.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.Probation.fields.documents",
          "jsonPath": "Probation.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.Regularisation.title",
      "name": "Regularisation",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Designation",
          "label": "employee.Regularisation.fields.designation",
          "jsonPath": "Regularisation.designation",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DeclaredOn",
          "label": "employee.Regularisation.fields.declaredOn",
          "jsonPath": "Regularisation.declaredOn",
          "pattern": "",
          "type": "datePicker",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "OrderNo",
          "label": "employee.Regularisation.fields.orderNo",
          "jsonPath": "Regularisation.orderNo",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "OrderDate",
          "label": "employee.Regularisation.fields.orderDate",
          "jsonPath": "Regularisation.orderDate",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.Regularisation.fields.remarks",
          "jsonPath": "Regularisation.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.Regularisation.fields.documents",
          "jsonPath": "Regularisation.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.TechnicalQualification.title",
      "name": "TechnicalQualification",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Skill",
          "label": "employee.TechnicalQualification.fields.skill",
          "jsonPath": "TechnicalQualification.skill",
          "pattern": "",
          "type": "text",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Grade",
          "label": "employee.TechnicalQualification.fields.grade",
          "jsonPath": "TechnicalQualification.grade",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "YearOfPassing",
          "label": "employee.TechnicalQualification.fields.yearOfPassing",
          "jsonPath": "TechnicalQualification.yearOfPassing",
          "pattern": "",
          "type": "number",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.TechnicalQualification.fields.remarks",
          "jsonPath": "TechnicalQualification.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.TechnicalQualification.fields.documents",
          "jsonPath": "TechnicalQualification.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.EducationalQualification.title",
      "name": "EducationalQualification",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Qualification",
          "label": "employee.EducationalQualification.fields.qualification",
          "jsonPath": "EducationalQualification.qualification",
          "pattern": "",
          "type": "text",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "MajorSubject",
          "label": "employee.EducationalQualification.fields.majorSubject",
          "jsonPath": "EducationalQualification.majorSubject",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "YearOfPassing",
          "label": "employee.EducationalQualification.fields.yearOfPassing",
          "jsonPath": "EducationalQualification.yearOfPassing",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "University",
          "label": "employee.EducationalQualification.fields.university",
          "jsonPath": "EducationalQualification.university",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.EducationalQualification.fields.documents",
          "jsonPath": "EducationalQualification.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.DepartmentalTest.title",
      "name": "DepartmentalTest",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Test",
          "label": "employee.DepartmentalTest.fields.test",
          "jsonPath": "DepartmentalTest.test",
          "pattern": "",
          "type": "text",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "YearOfPassing",
          "label": "employee.DepartmentalTest.fields.yearOfPassing",
          "jsonPath": "DepartmentalTest.yearOfPassing",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.DepartmentalTest.fields.remarks",
          "jsonPath": "DepartmentalTest.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.DepartmentalTest.fields.documents",
          "jsonPath": "DepartmentalTest.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.APRDetails.title",
      "name": "APRDetails",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "YearOfSubmission",
          "label": "employee.APRDetails.fields.yearOfSubmission",
          "jsonPath": "APRDetails.yearOfSubmission",
          "pattern": "",
          "type": "number",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "DetailsSubmitted",
          "label": "employee.APRDetails.fields.detailsSubmitted",
          "jsonPath": "APRDetails.detailsSubmitted",
          "pattern": "",
          "type": "radio",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": "",
          "values": [
            {
              "label": "True",
              "value": true
            }, {
              "label": "False",
              "value": false
            }
          ],
          "defaultValue": true
        }, {
          "name": "DateOfSubmission",
          "label": "employee.APRDetails.fields.dateOfSubmission",
          "jsonPath": "APRDetails.dateOfSubmission",
          "pattern": "",
          "type": "datePicker",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Remarks",
          "label": "employee.APRDetails.fields.remarks",
          "jsonPath": "APRDetails.remarks",
          "pattern": "",
          "type": "text",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "Documents",
          "label": "employee.APRDetails.fields.documents",
          "jsonPath": "APRDetails.documents",
          "pattern": "",
          "type": "multiFileUpload",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }, {
      "label": "employee.EmployeeDocuments.title",
      "name": "EmployeeDocuments",
      "children": [],
      "multiple": true,
      "fields": [
        {
          "name": "Document",
          "label": "employee.EmployeeDocuments.fields.document",
          "jsonPath": "EmployeeDocuments.document",
          "pattern": "",
          "type": "singleFileUpload",
          "isRequired": true,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }, {
          "name": "ReferenceType",
          "label": "employee.EmployeeDocuments.fields.referenceType",
          "jsonPath": "EmployeeDocuments.referenceType",
          "pattern": "",
          "type": "singleValueList",
          "isRequired": false,
          "isDisabled": false,
          "requiredErrMsg": "",
          "patternErrMsg": ""
        }
      ]
    }
  ]
}
}
// var assignments=  {
//     "label": "employee.Assignment.title",
//     "name": "Assignment",
//     "children": [],
//     "multiple": true,
//     "fields": [
//       {
//         "name": "Position",
//         "label": "employee.Assignment.fields.position",
//         "jsonPath": "Assignment[0].position",
//         "pattern": "",
//         "type": "number",
//         "isRequired": true,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Fund",
//         "label": "employee.Assignment.fields.fund",
//         "jsonPath": "Assignment[0].fund",
//         "pattern": "",
//         "type": "number",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Functionary",
//         "label": "employee.Assignment.fields.functionary",
//         "jsonPath": "Assignment[0].functionary",
//         "pattern": "",
//         "type": "text",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Function",
//         "label": "employee.Assignment.fields.function",
//         "jsonPath": "Assignment[0].function",
//         "pattern": "",
//         "type": "text",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Designation",
//         "label": "employee.Assignment.fields.designation",
//         "jsonPath": "Assignment[0].designation",
//         "pattern": "",
//         "type": "number",
//         "isRequired": true,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Department",
//         "label": "employee.Assignment.fields.department",
//         "jsonPath": "Assignment[0].department",
//         "pattern": "",
//         "type": "number",
//         "isRequired": true,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Hod",
//         "label": "employee.Assignment.fields.hod",
//         "jsonPath": "Assignment[0].hod",
//         "pattern": "",
//         "type": "multiValueList",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       // {
//       //   "name": "Primary",
//       //   "label": "employee.Assignment.fields.primary",
//       //   "jsonPath": "Assignment.primary",
//       //   "pattern": "",
//       //   "type": "radio",
//       //   "isRequired": true,
//       //   "isDisabled": false,
//       //   "requiredErrMsg": "",
//       //   "patternErrMsg": ""
//       // },
//       {
//         "name": "FromDate",
//         "label": "employee.Assignment.fields.fromDate",
//         "jsonPath": "Assignment[0].fromDate",
//         "pattern": "",
//         "type": "datePicker",
//         "isRequired": true,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "ToDate",
//         "label": "employee.Assignment.fields.toDate",
//         "jsonPath": "Assignment[0].toDate",
//         "pattern": "",
//         "type": "datePicker",
//         "isRequired": true,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Grade",
//         "label": "employee.Assignment.fields.grade",
//         "jsonPath": "Assignment[0].grade",
//         "pattern": "",
//         "type": "text",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "GovtOrderNumber",
//         "label": "employee.Assignment.fields.govtOrderNumber",
//         "jsonPath": "Assignment[0].govtOrderNumber",
//         "pattern": "",
//         "type": "text",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       },
//       {
//         "name": "Documents",
//         "label": "employee.Assignment.fields.documents",
//         "jsonPath": "Assignment[0].documents",
//         "pattern": "",
//         "type": "multiFileUpload",
//         "isRequired": false,
//         "isDisabled": false,
//         "requiredErrMsg": "",
//         "patternErrMsg": ""
//       }
//     ]
//   },

var dat =
{
    "employee.create":
  {
      "numCols": 4,
      "version": "v1",
      "url": "/hr-employee/employees/_create",
      "idJsonPath": "",
      "useTimestamp": true,
      "tenantIdRequired": false,
      "objectName": "Employee",
      "level": 0,
      "groups": [{
          "label": "employee.Employee.title",
          "name": "Employee",
          "children": [

          ],
          "multiple": false,
          "fields": [
            {
              "name": "Code",
              "label": "employee.Employee.fields.code",
              "jsonPath": "Employee.code",
              "pattern": "",
              "type": "textarea",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DateOfAppointment",
              "label": "employee.Employee.fields.dateOfAppointment",
              "jsonPath": "Employee.dateOfAppointment",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DateOfJoining",
              "label": "employee.Employee.fields.dateOfJoining",
              "jsonPath": "Employee.dateOfJoining",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DateOfRetirement",
              "label": "employee.Employee.fields.dateOfRetirement",
              "jsonPath": "Employee.dateOfRetirement",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "EmployeeStatus",
              "label": "employee.Employee.fields.employeeStatus",
              "jsonPath": "Employee.employeeStatus",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "RecruitmentMode",
              "label": "employee.Employee.fields.recruitmentMode",
              "jsonPath": "Employee.recruitmentMode",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "RecruitmentType",
              "label": "employee.Employee.fields.recruitmentType",
              "jsonPath": "Employee.recruitmentType",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "RecruitmentQuota",
              "label": "employee.Employee.fields.recruitmentQuota",
              "jsonPath": "Employee.recruitmentQuota",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "RetirementAge",
              "label": "employee.Employee.fields.retirementAge",
              "jsonPath": "Employee.retirementAge",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DateOfResignation",
              "label": "employee.Employee.fields.dateOfResignation",
              "jsonPath": "Employee.dateOfResignation",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DateOfTermination",
              "label": "employee.Employee.fields.dateOfTermination",
              "jsonPath": "Employee.dateOfTermination",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "EmployeeType",
              "label": "employee.Employee.fields.employeeType",
              "jsonPath": "Employee.employeeType",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Assignments",
              "label": "employee.Employee.fields.assignments",
              "jsonPath": "Employee.assignments",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Jurisdictions",
              "label": "employee.Employee.fields.jurisdictions",
              "jsonPath": "Employee.jurisdictions",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "MotherTongue",
              "label": "employee.Employee.fields.motherTongue",
              "jsonPath": "Employee.motherTongue",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Religion",
              "label": "employee.Employee.fields.religion",
              "jsonPath": "Employee.religion",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Community",
              "label": "employee.Employee.fields.community",
              "jsonPath": "Employee.community",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Category",
              "label": "employee.Employee.fields.category",
              "jsonPath": "Employee.category",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "PhysicallyDisabled",
            //   "label": "employee.Employee.fields.physicallyDisabled",
            //   "jsonPath": "Employee.physicallyDisabled",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": false,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            // {
            //   "name": "MedicalReportProduced",
            //   "label": "employee.Employee.fields.medicalReportProduced",
            //   "jsonPath": "Employee.medicalReportProduced",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": false,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "LanguagesKnown",
              "label": "employee.Employee.fields.languagesKnown",
              "jsonPath": "Employee.languagesKnown",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "MaritalStatus",
              "label": "employee.Employee.fields.maritalStatus",
              "jsonPath": "Employee.maritalStatus",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "PassportNo",
              "label": "employee.Employee.fields.passportNo",
              "jsonPath": "Employee.passportNo",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "GpfNo",
              "label": "employee.Employee.fields.gpfNo",
              "jsonPath": "Employee.gpfNo",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Bank",
              "label": "employee.Employee.fields.bank",
              "jsonPath": "Employee.bank",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "BankBranch",
              "label": "employee.Employee.fields.bankBranch",
              "jsonPath": "Employee.bankBranch",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "BankAccount",
              "label": "employee.Employee.fields.bankAccount",
              "jsonPath": "Employee.bankAccount",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Group",
              "label": "employee.Employee.fields.group",
              "jsonPath": "Employee.group",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "PlaceOfBirth",
              "label": "employee.Employee.fields.placeOfBirth",
              "jsonPath": "Employee.placeOfBirth",
              "pattern": "",
              "type": "textarea",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "ServiceHistory",
              "label": "employee.Employee.fields.serviceHistory",
              "jsonPath": "Employee.serviceHistory",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Probation",
              "label": "employee.Employee.fields.probation",
              "jsonPath": "Employee.probation",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Regularisation",
              "label": "employee.Employee.fields.regularisation",
              "jsonPath": "Employee.regularisation",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Technical",
              "label": "employee.Employee.fields.technical",
              "jsonPath": "Employee.technical",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Education",
              "label": "employee.Employee.fields.education",
              "jsonPath": "Employee.education",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Test",
              "label": "employee.Employee.fields.test",
              "jsonPath": "Employee.test",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "APRDetails",
              "label": "employee.Employee.fields.APRDetails",
              "jsonPath": "Employee.APRDetails",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.Employee.fields.documents",
              "jsonPath": "Employee.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.userName",
              "label": "employee.Employee.fields.User.userName",
              "jsonPath": "Employee.User.userName",
              "pattern": "",
              "type": "textarea",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.authToken",
              "label": "employee.Employee.fields.User.authToken",
              "jsonPath": "Employee.User.authToken",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.salutation",
              "label": "employee.Employee.fields.User.salutation",
              "jsonPath": "Employee.User.salutation",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.name",
              "label": "employee.Employee.fields.User.name",
              "jsonPath": "Employee.User.name",
              "pattern": "",
              "type": "textarea",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.gender",
              "label": "employee.Employee.fields.User.gender",
              "jsonPath": "Employee.User.gender",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.mobileNumber",
              "label": "employee.Employee.fields.User.mobileNumber",
              "jsonPath": "Employee.User.mobileNumber",
              "pattern": "",
              "type": "mobileNumber",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.aadhaarNumber",
              "label": "employee.Employee.fields.User.aadhaarNumber",
              "jsonPath": "Employee.User.aadhaarNumber",
              "pattern": "[0-9]",
              "type": "aadhar",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "User.active",
            //   "label": "employee.Employee.fields.User.active",
            //   "jsonPath": "Employee.User.active",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": false,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "User.pwdExpiryDate",
              "label": "employee.Employee.fields.User.pwdExpiryDate",
              "jsonPath": "Employee.User.pwdExpiryDate",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.locale",
              "label": "employee.Employee.fields.User.locale",
              "jsonPath": "Employee.User.locale",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.type",
              "label": "employee.Employee.fields.User.type",
              "jsonPath": "Employee.User.type",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "User.accountLocked",
            //   "label": "employee.Employee.fields.User.accountLocked",
            //   "jsonPath": "Employee.User.accountLocked",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": false,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "User.roles",
              "label": "employee.Employee.fields.User.roles",
              "jsonPath": "Employee.User.roles",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "User.userDetails",
              "label": "employee.Employee.fields.User.userDetails",
              "jsonPath": "Employee.User.userDetails",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.Assignment.title",
          "name": "Assignment",
          "children": [],
          "multiple": true,
          "fields": [
            {
              "name": "Position",
              "label": "employee.Assignment.fields.position",
              "jsonPath": "Assignment.position",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Fund",
              "label": "employee.Assignment.fields.fund",
              "jsonPath": "Assignment.fund",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Functionary",
              "label": "employee.Assignment.fields.functionary",
              "jsonPath": "Assignment.functionary",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Function",
              "label": "employee.Assignment.fields.function",
              "jsonPath": "Assignment.function",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Designation",
              "label": "employee.Assignment.fields.designation",
              "jsonPath": "Assignment.designation",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Department",
              "label": "employee.Assignment.fields.department",
              "jsonPath": "Assignment.department",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Hod",
              "label": "employee.Assignment.fields.hod",
              "jsonPath": "Assignment.hod",
              "pattern": "",
              "type": "multiValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "Primary",
            //   "label": "employee.Assignment.fields.primary",
            //   "jsonPath": "Assignment.primary",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": true,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "FromDate",
              "label": "employee.Assignment.fields.fromDate",
              "jsonPath": "Assignment.fromDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "ToDate",
              "label": "employee.Assignment.fields.toDate",
              "jsonPath": "Assignment.toDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Grade",
              "label": "employee.Assignment.fields.grade",
              "jsonPath": "Assignment.grade",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "GovtOrderNumber",
              "label": "employee.Assignment.fields.govtOrderNumber",
              "jsonPath": "Assignment.govtOrderNumber",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.Assignment.fields.documents",
              "jsonPath": "Assignment.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.ServiceHistory.title",
          "name": "ServiceHistory",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "ServiceInfo",
              "label": "employee.ServiceHistory.fields.serviceInfo",
              "jsonPath": "ServiceHistory.serviceInfo",
              "pattern": "",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "ServiceFrom",
              "label": "employee.ServiceHistory.fields.serviceFrom",
              "jsonPath": "ServiceHistory.serviceFrom",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.ServiceHistory.fields.remarks",
              "jsonPath": "ServiceHistory.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "OrderNo",
              "label": "employee.ServiceHistory.fields.orderNo",
              "jsonPath": "ServiceHistory.orderNo",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.ServiceHistory.fields.documents",
              "jsonPath": "ServiceHistory.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.Probation.title",
          "name": "Probation",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Designation",
              "label": "employee.Probation.fields.designation",
              "jsonPath": "Probation.designation",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DeclaredOn",
              "label": "employee.Probation.fields.declaredOn",
              "jsonPath": "Probation.declaredOn",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "OrderNo",
              "label": "employee.Probation.fields.orderNo",
              "jsonPath": "Probation.orderNo",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "OrderDate",
              "label": "employee.Probation.fields.orderDate",
              "jsonPath": "Probation.orderDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.Probation.fields.remarks",
              "jsonPath": "Probation.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.Probation.fields.documents",
              "jsonPath": "Probation.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.Regularisation.title",
          "name": "Regularisation",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Designation",
              "label": "employee.Regularisation.fields.designation",
              "jsonPath": "Regularisation.designation",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "DeclaredOn",
              "label": "employee.Regularisation.fields.declaredOn",
              "jsonPath": "Regularisation.declaredOn",
              "pattern": "",
              "type": "datePicker",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "OrderNo",
              "label": "employee.Regularisation.fields.orderNo",
              "jsonPath": "Regularisation.orderNo",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "OrderDate",
              "label": "employee.Regularisation.fields.orderDate",
              "jsonPath": "Regularisation.orderDate",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.Regularisation.fields.remarks",
              "jsonPath": "Regularisation.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.Regularisation.fields.documents",
              "jsonPath": "Regularisation.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.TechnicalQualification.title",
          "name": "TechnicalQualification",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Skill",
              "label": "employee.TechnicalQualification.fields.skill",
              "jsonPath": "TechnicalQualification.skill",
              "pattern": "",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Grade",
              "label": "employee.TechnicalQualification.fields.grade",
              "jsonPath": "TechnicalQualification.grade",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "YearOfPassing",
              "label": "employee.TechnicalQualification.fields.yearOfPassing",
              "jsonPath": "TechnicalQualification.yearOfPassing",
              "pattern": "",
              "type": "number",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.TechnicalQualification.fields.remarks",
              "jsonPath": "TechnicalQualification.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.TechnicalQualification.fields.documents",
              "jsonPath": "TechnicalQualification.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.EducationalQualification.title",
          "name": "EducationalQualification",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Qualification",
              "label": "employee.EducationalQualification.fields.qualification",
              "jsonPath": "EducationalQualification.qualification",
              "pattern": "",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "MajorSubject",
              "label": "employee.EducationalQualification.fields.majorSubject",
              "jsonPath": "EducationalQualification.majorSubject",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "YearOfPassing",
              "label": "employee.EducationalQualification.fields.yearOfPassing",
              "jsonPath": "EducationalQualification.yearOfPassing",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "University",
              "label": "employee.EducationalQualification.fields.university",
              "jsonPath": "EducationalQualification.university",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.EducationalQualification.fields.documents",
              "jsonPath": "EducationalQualification.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.DepartmentalTest.title",
          "name": "DepartmentalTest",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Test",
              "label": "employee.DepartmentalTest.fields.test",
              "jsonPath": "DepartmentalTest.test",
              "pattern": "",
              "type": "text",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "YearOfPassing",
              "label": "employee.DepartmentalTest.fields.yearOfPassing",
              "jsonPath": "DepartmentalTest.yearOfPassing",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.DepartmentalTest.fields.remarks",
              "jsonPath": "DepartmentalTest.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.DepartmentalTest.fields.documents",
              "jsonPath": "DepartmentalTest.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.APRDetails.title",
          "name": "APRDetails",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "YearOfSubmission",
              "label": "employee.APRDetails.fields.yearOfSubmission",
              "jsonPath": "APRDetails.yearOfSubmission",
              "pattern": "",
              "type": "number",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            // {
            //   "name": "DetailsSubmitted",
            //   "label": "employee.APRDetails.fields.detailsSubmitted",
            //   "jsonPath": "APRDetails.detailsSubmitted",
            //   "pattern": "",
            //   "type": "radio",
            //   "isRequired": true,
            //   "isDisabled": false,
            //   "requiredErrMsg": "",
            //   "patternErrMsg": ""
            // },
            {
              "name": "DateOfSubmission",
              "label": "employee.APRDetails.fields.dateOfSubmission",
              "jsonPath": "APRDetails.dateOfSubmission",
              "pattern": "",
              "type": "datePicker",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Remarks",
              "label": "employee.APRDetails.fields.remarks",
              "jsonPath": "APRDetails.remarks",
              "pattern": "",
              "type": "text",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "Documents",
              "label": "employee.APRDetails.fields.documents",
              "jsonPath": "APRDetails.documents",
              "pattern": "",
              "type": "multiFileUpload",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        },
        {
          "label": "employee.EmployeeDocuments.title",
          "name": "EmployeeDocuments",
          "children": [],
          "multiple": true,
          "fields": [{
              "name": "Document",
              "label": "employee.EmployeeDocuments.fields.document",
              "jsonPath": "EmployeeDocuments.document",
              "pattern": "",
              "type": "singleFileUpload",
              "isRequired": true,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            },
            {
              "name": "ReferenceType",
              "label": "employee.EmployeeDocuments.fields.referenceType",
              "jsonPath": "EmployeeDocuments.referenceType",
              "pattern": "",
              "type": "singleValueList",
              "isRequired": false,
              "isDisabled": false,
              "requiredErrMsg": "",
              "patternErrMsg": ""
            }
          ]
        }
      ]
    }
    // {
    //   "numCols": 4,
    //   "version": "v1",
    //   "url": "/hr-employee/nominees/_create",
    //   "idJsonPath": "",
    //   "useTimestamp": true,
    //   "tenantIdRequired": false,
    //   "objectName": "Nominee",
    //   "level": 0,
    //   "groups": [{
    //       "label": "employee.Nominee.title",
    //       "name": "Nominee",
    //       "children": [
    //         "Employee"
    //       ],
    //       "multiple": true,
    //       "fields": [{
    //           "name": "Name",
    //           "label": "employee.Nominee.fields.name",
    //           "jsonPath": "Nominee.name",
    //           "pattern": "",
    //           "type": "textarea",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Gender",
    //           "label": "employee.Nominee.fields.gender",
    //           "jsonPath": "Nominee.gender",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfBirth",
    //           "label": "employee.Nominee.fields.dateOfBirth",
    //           "jsonPath": "Nominee.dateOfBirth",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "MaritalStatus",
    //           "label": "employee.Nominee.fields.maritalStatus",
    //           "jsonPath": "Nominee.maritalStatus",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Relationship",
    //           "label": "employee.Nominee.fields.relationship",
    //           "jsonPath": "Nominee.relationship",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Bank",
    //           "label": "employee.Nominee.fields.bank",
    //           "jsonPath": "Nominee.bank",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "BankBranch",
    //           "label": "employee.Nominee.fields.bankBranch",
    //           "jsonPath": "Nominee.bankBranch",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "BankAccount",
    //           "label": "employee.Nominee.fields.bankAccount",
    //           "jsonPath": "Nominee.bankAccount",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Nominated",
    //           "label": "employee.Nominee.fields.nominated",
    //           "jsonPath": "Nominee.nominated",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Employed",
    //           "label": "employee.Nominee.fields.employed",
    //           "jsonPath": "Nominee.employed",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         }
    //       ]
    //     },
    //     {
    //       "label": "employee.Employee.title",
    //       "name": "Employee",
    //       "children": [],
    //       "multiple": false,
    //       "fields": [{
    //           "name": "Code",
    //           "label": "employee.Employee.fields.code",
    //           "jsonPath": "Employee.code",
    //           "pattern": "",
    //           "type": "textarea",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfAppointment",
    //           "label": "employee.Employee.fields.dateOfAppointment",
    //           "jsonPath": "Employee.dateOfAppointment",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfJoining",
    //           "label": "employee.Employee.fields.dateOfJoining",
    //           "jsonPath": "Employee.dateOfJoining",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfRetirement",
    //           "label": "employee.Employee.fields.dateOfRetirement",
    //           "jsonPath": "Employee.dateOfRetirement",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "EmployeeStatus",
    //           "label": "employee.Employee.fields.employeeStatus",
    //           "jsonPath": "Employee.employeeStatus",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "RecruitmentMode",
    //           "label": "employee.Employee.fields.recruitmentMode",
    //           "jsonPath": "Employee.recruitmentMode",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "RecruitmentType",
    //           "label": "employee.Employee.fields.recruitmentType",
    //           "jsonPath": "Employee.recruitmentType",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "RecruitmentQuota",
    //           "label": "employee.Employee.fields.recruitmentQuota",
    //           "jsonPath": "Employee.recruitmentQuota",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "RetirementAge",
    //           "label": "employee.Employee.fields.retirementAge",
    //           "jsonPath": "Employee.retirementAge",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfResignation",
    //           "label": "employee.Employee.fields.dateOfResignation",
    //           "jsonPath": "Employee.dateOfResignation",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "DateOfTermination",
    //           "label": "employee.Employee.fields.dateOfTermination",
    //           "jsonPath": "Employee.dateOfTermination",
    //           "pattern": "",
    //           "type": "datePicker",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "EmployeeType",
    //           "label": "employee.Employee.fields.employeeType",
    //           "jsonPath": "Employee.employeeType",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Assignments",
    //           "label": "employee.Employee.fields.assignments",
    //           "jsonPath": "Employee.assignments",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Jurisdictions",
    //           "label": "employee.Employee.fields.jurisdictions",
    //           "jsonPath": "Employee.jurisdictions",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": true,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "MotherTongue",
    //           "label": "employee.Employee.fields.motherTongue",
    //           "jsonPath": "Employee.motherTongue",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Religion",
    //           "label": "employee.Employee.fields.religion",
    //           "jsonPath": "Employee.religion",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Community",
    //           "label": "employee.Employee.fields.community",
    //           "jsonPath": "Employee.community",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Category",
    //           "label": "employee.Employee.fields.category",
    //           "jsonPath": "Employee.category",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "PhysicallyDisabled",
    //           "label": "employee.Employee.fields.physicallyDisabled",
    //           "jsonPath": "Employee.physicallyDisabled",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "MedicalReportProduced",
    //           "label": "employee.Employee.fields.medicalReportProduced",
    //           "jsonPath": "Employee.medicalReportProduced",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "LanguagesKnown",
    //           "label": "employee.Employee.fields.languagesKnown",
    //           "jsonPath": "Employee.languagesKnown",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "MaritalStatus",
    //           "label": "employee.Employee.fields.maritalStatus",
    //           "jsonPath": "Employee.maritalStatus",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "PassportNo",
    //           "label": "employee.Employee.fields.passportNo",
    //           "jsonPath": "Employee.passportNo",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "GpfNo",
    //           "label": "employee.Employee.fields.gpfNo",
    //           "jsonPath": "Employee.gpfNo",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Bank",
    //           "label": "employee.Employee.fields.bank",
    //           "jsonPath": "Employee.bank",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "BankBranch",
    //           "label": "employee.Employee.fields.bankBranch",
    //           "jsonPath": "Employee.bankBranch",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "BankAccount",
    //           "label": "employee.Employee.fields.bankAccount",
    //           "jsonPath": "Employee.bankAccount",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Group",
    //           "label": "employee.Employee.fields.group",
    //           "jsonPath": "Employee.group",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "PlaceOfBirth",
    //           "label": "employee.Employee.fields.placeOfBirth",
    //           "jsonPath": "Employee.placeOfBirth",
    //           "pattern": "",
    //           "type": "textarea",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "ServiceHistory",
    //           "label": "employee.Employee.fields.serviceHistory",
    //           "jsonPath": "Employee.serviceHistory",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Probation",
    //           "label": "employee.Employee.fields.probation",
    //           "jsonPath": "Employee.probation",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Regularisation",
    //           "label": "employee.Employee.fields.regularisation",
    //           "jsonPath": "Employee.regularisation",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Technical",
    //           "label": "employee.Employee.fields.technical",
    //           "jsonPath": "Employee.technical",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Education",
    //           "label": "employee.Employee.fields.education",
    //           "jsonPath": "Employee.education",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Test",
    //           "label": "employee.Employee.fields.test",
    //           "jsonPath": "Employee.test",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "APRDetails",
    //           "label": "employee.Employee.fields.APRDetails",
    //           "jsonPath": "Employee.APRDetails",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "Documents",
    //           "label": "employee.Employee.fields.documents",
    //           "jsonPath": "Employee.documents",
    //           "pattern": "",
    //           "type": "multiFileUpload",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.userName",
    //           "label": "employee.Employee.fields.User.userName",
    //           "jsonPath": "Employee.User.userName",
    //           "pattern": "",
    //           "type": "textarea",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.authToken",
    //           "label": "employee.Employee.fields.User.authToken",
    //           "jsonPath": "Employee.User.authToken",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.salutation",
    //           "label": "employee.Employee.fields.User.salutation",
    //           "jsonPath": "Employee.User.salutation",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.name",
    //           "label": "employee.Employee.fields.User.name",
    //           "jsonPath": "Employee.User.name",
    //           "pattern": "",
    //           "type": "textarea",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.gender",
    //           "label": "employee.Employee.fields.User.gender",
    //           "jsonPath": "Employee.User.gender",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.mobileNumber",
    //           "label": "employee.Employee.fields.User.mobileNumber",
    //           "jsonPath": "Employee.User.mobileNumber",
    //           "pattern": "",
    //           "type": "mobileNumber",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.aadhaarNumber",
    //           "label": "employee.Employee.fields.User.aadhaarNumber",
    //           "jsonPath": "Employee.User.aadhaarNumber",
    //           "pattern": "[0-9]",
    //           "type": "aadhar",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.active",
    //           "label": "employee.Employee.fields.User.active",
    //           "jsonPath": "Employee.User.active",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.pwdExpiryDate",
    //           "label": "employee.Employee.fields.User.pwdExpiryDate",
    //           "jsonPath": "Employee.User.pwdExpiryDate",
    //           "pattern": "",
    //           "type": "number",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.locale",
    //           "label": "employee.Employee.fields.User.locale",
    //           "jsonPath": "Employee.User.locale",
    //           "pattern": "",
    //           "type": "text",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.type",
    //           "label": "employee.Employee.fields.User.type",
    //           "jsonPath": "Employee.User.type",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.accountLocked",
    //           "label": "employee.Employee.fields.User.accountLocked",
    //           "jsonPath": "Employee.User.accountLocked",
    //           "pattern": "",
    //           "type": "radio",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.roles",
    //           "label": "employee.Employee.fields.User.roles",
    //           "jsonPath": "Employee.User.roles",
    //           "pattern": "",
    //           "type": "multiValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         },
    //         {
    //           "name": "User.userDetails",
    //           "label": "employee.Employee.fields.User.userDetails",
    //           "jsonPath": "Employee.User.userDetails",
    //           "pattern": "",
    //           "type": "singleValueList",
    //           "isRequired": false,
    //           "isDisabled": false,
    //           "requiredErrMsg": "",
    //           "patternErrMsg": ""
    //         }
    //       ]
    //     }
    //   ]
    // }]

  }


  export default dat;


  // [{
  //     "numCols": 4,
  //     "version": "v1",
  //     "url": "/users/v110/users/_create",
  //     "idJsonPath": "",
  //     "useTimestamp": true,
  //     "tenantIdRequired": false,
  //     "objectName": "User",
  //     "level": 0,
  //     "groups": [{
  //       "label": "user.User.title",
  //       "name": "User",
  //       "children": [],
  //       "multiple": true,
  //       "fields": [{
  //           "name": "UserName",
  //           "label": "user.User.fields.userName",
  //           "jsonPath": "User.userName",
  //           "pattern": "",
  //           "type": "textarea",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "AuthToken",
  //           "label": "user.User.fields.authToken",
  //           "jsonPath": "User.authToken",
  //           "pattern": "",
  //           "type": "text",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Salutation",
  //           "label": "user.User.fields.salutation",
  //           "jsonPath": "User.salutation",
  //           "pattern": "",
  //           "type": "text",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Name",
  //           "label": "user.User.fields.name",
  //           "jsonPath": "User.name",
  //           "pattern": "",
  //           "type": "textarea",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Gender",
  //           "label": "user.User.fields.gender",
  //           "jsonPath": "User.gender",
  //           "pattern": "",
  //           "type": "singleValueList",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "MobileNumber",
  //           "label": "user.User.fields.mobileNumber",
  //           "jsonPath": "User.mobileNumber",
  //           "pattern": "",
  //           "type": "mobileNumber",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "AadhaarNumber",
  //           "label": "user.User.fields.aadhaarNumber",
  //           "jsonPath": "User.aadhaarNumber",
  //           "pattern": "[0-9]",
  //           "type": "aadhar",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Active",
  //           "label": "user.User.fields.active",
  //           "jsonPath": "User.active",
  //           "pattern": "",
  //           "type": "radio",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "PwdExpiryDate",
  //           "label": "user.User.fields.pwdExpiryDate",
  //           "jsonPath": "User.pwdExpiryDate",
  //           "pattern": "",
  //           "type": "number",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Locale",
  //           "label": "user.User.fields.locale",
  //           "jsonPath": "User.locale",
  //           "pattern": "",
  //           "type": "text",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Type",
  //           "label": "user.User.fields.type",
  //           "jsonPath": "User.type",
  //           "pattern": "",
  //           "type": "singleValueList",
  //           "isRequired": true,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "AccountLocked",
  //           "label": "user.User.fields.accountLocked",
  //           "jsonPath": "User.accountLocked",
  //           "pattern": "",
  //           "type": "radio",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "Roles",
  //           "label": "user.User.fields.roles",
  //           "jsonPath": "User.roles",
  //           "pattern": "",
  //           "type": "multiValueList",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         },
  //         {
  //           "name": "UserDetails",
  //           "label": "user.User.fields.userDetails",
  //           "jsonPath": "User.userDetails",
  //           "pattern": "",
  //           "type": "singleValueList",
  //           "isRequired": false,
  //           "isDisabled": false,
  //           "requiredErrMsg": "",
  //           "patternErrMsg": ""
  //         }
  //       ]
  //     }]
  //   }
