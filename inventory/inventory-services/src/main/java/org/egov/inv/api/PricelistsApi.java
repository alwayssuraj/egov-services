/**
 * NOTE: This class is auto generated by the swagger code generator program (2.2.3).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package org.egov.inv.api;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.egov.inv.model.ErrorRes;
import org.egov.inv.model.PriceListRequest;
import org.egov.inv.model.PriceListResponse;
import org.egov.inv.model.RequestInfo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@javax.annotation.Generated(value = "org.egov.inv.codegen.languages.SpringCodegen", date = "2017-11-08T13:51:07.770Z")

@Api(value = "pricelists", description = "the pricelists API")
public interface PricelistsApi {

    @ApiOperation(value = "Create new pricelist", notes = "Whenever a pricelist is created, this API will hold the common set of information. This API will be invoked intenrally during pricelist creation.", response = PriceListResponse.class, tags={ "PriceList", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "pricelist created Successfully", response = PriceListResponse.class),
        @ApiResponse(code = 400, message = "Invalid Input", response = ErrorRes.class) })
    
    @RequestMapping(value = "/pricelists/_create",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<PriceListResponse> pricelistsCreatePost( @NotNull@ApiParam(value = "Unique id for a tenant.", required = true) @RequestParam(value = "tenantId", required = true) String tenantId,@ApiParam(value = "Create new pricelist"  )  @Valid @RequestBody PriceListRequest priceListRequest);


    @ApiOperation(value = "Get the value of usedQuantity of a material of priceList whose ratetype is One Time Tender.", notes = "Tells how much quantity from the pricelist is used by purchaseOrders.", response = PriceListResponse.class, tags={ "PriceList", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "PriceList retrieved Successfully", response = PriceListResponse.class),
        @ApiResponse(code = 400, message = "Invalid Input", response = ErrorRes.class) })
    
    @RequestMapping(value = "/pricelists/_gettenderusedquantity",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<PriceListResponse> pricelistsGettenderusedquantityPost(@ApiParam(value = "Name of the material whose usedQuantity we want to find. ") @RequestParam(value = "material", required = false) String material,@ApiParam(value = "reference no of the priceList in which we want to find the usedQuantity ") @RequestParam(value = "priceListId", required = false) String priceListId);


    @ApiOperation(value = "Get the list of common pricelist information", notes = "PriceList is parent object that holds the common information for both.", response = PriceListResponse.class, tags={ "PriceList", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "PriceList retrieved Successfully", response = PriceListResponse.class),
        @ApiResponse(code = 400, message = "Invalid Input", response = ErrorRes.class) })
    
    @RequestMapping(value = "/pricelists/_search",
    produces = { "application/json" }, 
    consumes = { "application/json" },
    method = RequestMethod.POST)
    ResponseEntity<PriceListResponse> pricelistsSearchPost( @NotNull@ApiParam(value = "Unique id for a tenant.", required = true) @RequestParam(value = "tenantId", required = true) String tenantId,@ApiParam(value = "Parameter to carry Request metadata in the request body"  )  @Valid @RequestBody RequestInfo requestInfo,@ApiParam(value = "Name of the vendor supplying materials required ") @RequestParam(value = "suppliers", required = false) List<String> suppliers,@ApiParam(value = "search on basis of ids ") @RequestParam(value = "ids", required = false) String ids,@ApiParam(value = "reference no of the material contract from the supplier ") @RequestParam(value = "rateContractNumber", required = false) String rateContractNumber,@ApiParam(value = "Agreement no with the supplier of materials ") @RequestParam(value = "agreementNumber", required = false) List<String> agreementNumber,@ApiParam(value = "select only given materil codes ") @RequestParam(value = "materialCode", required = false) String materialCode,@ApiParam(value = "contract date of the rate for item with the supplier.Date in epoc format. ") @RequestParam(value = "rateContractDate", required = false) Long rateContractDate,@ApiParam(value = "Date on which agreement done with supplier ") @RequestParam(value = "agreementDate", required = false) Long agreementDate,@ApiParam(value = "Date from which the agreement is valid with supplier ") @RequestParam(value = "agreementStartDate", required = false) Long agreementStartDate,@ApiParam(value = "Date on which the agreement expires with the supplier ") @RequestParam(value = "agreementEndDate", required = false) Long agreementEndDate,@ApiParam(value = "Date on which valid pricelist exists. This will be used to fetch valid pricelist for the given date. this date should be         greater than agreementStartDate and less than agreementEndDate ") @RequestParam(value = "asOnDate", required = false) Long asOnDate,@ApiParam(value = "type of the information about the material we are getting from the supplier ", allowableValues = "DGSC Rate Contract, ULB Rate Contract, One Time Tender, Quotation") @RequestParam(value = "rateType", required = false) String rateType, @Min(0) @Max(100)@ApiParam(value = "Number of records returned.", defaultValue = "20") @RequestParam(value = "pageSize", required = false, defaultValue="20") Integer pageSize,@ApiParam(value = "Page number", defaultValue = "1") @RequestParam(value = "pageNumber", required = false, defaultValue="1") Integer pageNumber,@ApiParam(value = "This takes any field from the Object seperated by comma and asc,desc keywords. example name asc,code desc or name,code or name,code desc", defaultValue = "id") @RequestParam(value = "sortBy", required = false, defaultValue="id") String sortBy);

    @ApiOperation(value = "Update any of the pricelists", notes = "The common set of information shared by pricelists will be updated upon invoking this API.", response = PriceListResponse.class, tags={ "PriceList", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "pricelist updated Successfully", response = PriceListResponse.class),
        @ApiResponse(code = 400, message = "Invalid Input", response = ErrorRes.class) })
    
    @RequestMapping(value = "/pricelists/_update",
        produces = { "application/json" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<PriceListResponse> pricelistsUpdatePost( @NotNull@ApiParam(value = "Unique id for a tenant.", required = true) @RequestParam(value = "tenantId", required = true) String tenantId,@ApiParam(value = "common Request info"  )  @Valid @RequestBody PriceListRequest pricelistRequest);

}
