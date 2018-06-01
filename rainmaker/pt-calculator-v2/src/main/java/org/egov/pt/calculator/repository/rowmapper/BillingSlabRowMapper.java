package org.egov.pt.calculator.repository.rowmapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.egov.pt.calculator.web.models.property.BillingSlab;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

@Component
public class BillingSlabRowMapper implements ResultSetExtractor<List<BillingSlab>>  {
	
	@Override
	public List<BillingSlab> extractData(ResultSet rs) throws SQLException, DataAccessException {
		Map<String, BillingSlab> billingSlabMap = new HashMap<>();
		while(rs.next()) {
			String currentId = rs.getString("id");
			BillingSlab currentBillingSlab = billingSlabMap.get(currentId);
			if(null == currentBillingSlab) {
				currentBillingSlab = BillingSlab.builder().id(rs.getString("id")).area(rs.getString("area"))
						.fromFloor(rs.getString("fromFloor")).fromPlotSize(rs.getString("fromPlotSize")).ownerShipCategory(rs.getString("ownerShipCategory"))
						.propertySubType(rs.getString("propertySubType")).propertyType(rs.getString("propertyType")).subOwnerShipCategory(rs.getString("subOwnerShipCategory"))
						.tenantId(rs.getString("tenantId")).toFloor(rs.getString("toFLoor")).toPlotSize(rs.getString("toPlotSize")).unitRate(rs.getDouble("unitRate"))
						.usageCategoryDetail(rs.getString("usageCategoryDetail")).usageCategoryMajor(rs.getString("usageCategoryMajor")).usageCategoryMinor(rs.getString("usageCategoryMinor"))
						.usageCategorySubMinor(rs.getString("usageCategorySubMinor")).build();
				
				billingSlabMap.put(currentId, currentBillingSlab);
			}
			
			
		}
		
		return new ArrayList<>(billingSlabMap.values());

	}

}
