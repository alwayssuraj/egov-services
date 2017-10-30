package org.egov.lcms.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 * @author Prasad
 *
 */

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdvocateDetails {
	
	@JsonProperty("code")
	private String code;
	
	@JsonProperty("advocate")
	private Advocate advocate;
	
	@JsonProperty("assigndate")
	private Long assigndate;
	
	@JsonProperty("fee")
	private Double fee;
	
	@JsonProperty("auditDetails")
	private AuditDetails auditDetails;
	

}
