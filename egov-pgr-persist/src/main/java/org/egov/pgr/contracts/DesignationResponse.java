package org.egov.pgr.contracts;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DesignationResponse {

    @JsonProperty("id")
    private Long id;

    public Long getId() {
        return id;
    }
}
