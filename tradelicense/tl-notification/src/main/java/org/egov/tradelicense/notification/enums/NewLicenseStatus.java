package org.egov.tradelicense.notification.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum NewLicenseStatus {

	ACKNOWLEDGED("ACKNOWLEDGED"), APPLICATION_FEE_PAID("APPLICATIONFEEPAID"), SCRUTINY_COMPLETED(
			"SCRUTINYCOMPLETED"), INSPECTION_COMPLETED("INSPECTIONCOMPLETED"), FINAL_APPROVAL_COMPLETED(
					"FINALAPPROVALCOMPLETED"), LICENSE_FEE_PAID("LICENSEFEEPAID"), LICENSE_ISSUED("LICENSEISSUED"),
						REJECTED("REJECTED");

	private final String name;

}