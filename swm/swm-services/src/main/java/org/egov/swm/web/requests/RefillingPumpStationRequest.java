package org.egov.swm.web.requests;

import java.util.List;

import javax.validation.Valid;

import org.egov.common.contract.request.RequestInfo;
import org.egov.swm.domain.model.RefillingPumpStation;
import org.hibernate.validator.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

public @Data class RefillingPumpStationRequest {
    @Valid
    @JsonProperty("RequestInfo")
    private RequestInfo requestInfo = new RequestInfo();

    @Valid
    @NotEmpty
    private List<RefillingPumpStation> refillingPumpStations;
}
