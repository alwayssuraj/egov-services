package org.egov.egf.bill.web.requests;

import java.util.List;

import org.egov.common.contract.response.ResponseInfo;
import org.egov.common.web.contract.PaginationContract;
import org.egov.egf.bill.domain.model.BillRegister;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@JsonInclude(value = Include.NON_NULL)
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BillRegisterResponse {
    private ResponseInfo responseInfo;
    private List<BillRegister> billRegisters;
    private PaginationContract page;
}