package org.egov.mr.model;

import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Builder
public class PriestInfo {
	@NotNull
	private String name;

	@NotNull
	private Long religion;

	@NotNull
	private String address;
}
