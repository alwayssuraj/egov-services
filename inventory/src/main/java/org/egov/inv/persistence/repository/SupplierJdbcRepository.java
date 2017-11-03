/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 *    accountability and the service delivery of the government  organizations.
 *
 *     Copyright (C) <2015>  eGovernments Foundation
 *
 *     The updated version of eGov suite of products as by eGovernments Foundation
 *     is available at http://www.egovernments.org
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program. If not, see http://www.gnu.org/licenses/ or
 *     http://www.gnu.org/licenses/gpl.html .
 *
 *     In addition to the terms of the GPL license to be adhered to in using this
 *     program, the following additional terms are to be complied with:
 *
 *         1) All versions of this program, verbatim or modified must carry this
 *            Legal Notice.
 *
 *         2) Any misrepresentation of the origin of the material is prohibited. It
 *            is required that all modified versions of this material be marked in
 *            reasonable ways as different from the original version.
 *
 *         3) This license does not grant any rights to any user of the program
 *            with regards to rights under trademark law for use of the trade names
 *            or trademarks of eGovernments Foundation.
 *
 *   In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */
package org.egov.inv.persistence.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.egov.inv.domain.model.SupplierGetRequest;
import org.egov.inv.persistence.entity.SupplierEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Service;

import io.swagger.model.Pagination;
import io.swagger.model.Store;
import io.swagger.model.StoreGetRequest;
import io.swagger.model.Supplier;

@Service
public class SupplierJdbcRepository extends JdbcRepository {

	private static final Logger LOG = LoggerFactory.getLogger(SupplierJdbcRepository.class);

	static {
		LOG.debug("init supplier");
		init(SupplierEntity.class);
		LOG.debug("end init supplier");
	}

	public Pagination<Supplier> search(SupplierGetRequest supplierGetRequest) {
		String searchQuery = "select * from supplier :condition :orderby";
		StringBuffer params = new StringBuffer();
		Map<String, Object> paramValues = new HashMap<>();
		if (supplierGetRequest.getSortBy() != null && !supplierGetRequest.getSortBy().isEmpty()) {
			validateSortByOrder(supplierGetRequest.getSortBy());
			validateEntityFieldName(supplierGetRequest.getSortBy(), SupplierGetRequest.class);
		}
		String orderBy = "order by code";
		if (supplierGetRequest.getSortBy() != null && !supplierGetRequest.getSortBy().isEmpty()) {
			orderBy = "order by " + supplierGetRequest.getSortBy();
		}
		if (supplierGetRequest.getIds() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("id in (:ids)");
			paramValues.put("ids", supplierGetRequest.getIds());
		}
		if (supplierGetRequest.getCode() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("code = :code");
			paramValues.put("code", supplierGetRequest.getCode());
		}
		if (supplierGetRequest.getName() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("name = :name");
			paramValues.put("name", supplierGetRequest.getName());
		}
		if (supplierGetRequest.getSupplyType() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("supplytype = :supplytype");
			paramValues.put("supplytype", supplierGetRequest.getSupplyType());
		}
		if (supplierGetRequest.getAddress() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("department = :department");
			paramValues.put("department", supplierGetRequest.getAddress());
		}
		if (supplierGetRequest.getStatus() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("status = :status");
			paramValues.put("status", supplierGetRequest.getStatus());
		}

		if (supplierGetRequest.getInActiveDate() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("inactivedate = :inactivedate");
			paramValues.put("inactivedate", supplierGetRequest.getInActiveDate());
		}
		if (supplierGetRequest.getSupplierContactNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("suppliercontactno = :suppliercontactno");
			paramValues.put("suppliercontactno", supplierGetRequest.getSupplierContactNo());
		}

		if (supplierGetRequest.getFaxNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("faxno = :faxno");
			paramValues.put("faxno", supplierGetRequest.getFaxNo());
		}
		if (supplierGetRequest.getWebsite() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("website = :website");
			paramValues.put("website", supplierGetRequest.getWebsite());
		}
		if (supplierGetRequest.getEmail() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("email = :email");
			paramValues.put("email", supplierGetRequest.getEmail());
		}
		if (supplierGetRequest.getPanNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("panno = :panno");
			paramValues.put("panno", supplierGetRequest.getPanNo());

		}
		if (supplierGetRequest.getTinNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("tinno = :tinno");
			paramValues.put("tinno", supplierGetRequest.getTinNo());
		}
		if (supplierGetRequest.getCstNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("cstno = :cstno");
			paramValues.put("cstno", supplierGetRequest.getCstNo());
		}

		if (supplierGetRequest.getVatNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("vatno = :vatno");
			paramValues.put("vatno", supplierGetRequest.getVatNo());
		}
		if (supplierGetRequest.getContactPerson() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("contactperson = :contactperson");
			paramValues.put("contactperson", supplierGetRequest.getContactPerson());
		}
		if (supplierGetRequest.getContactPersonNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("contactpersonno = :contactpersonno");
			paramValues.put("contactpersonno", supplierGetRequest.getContactPersonNo());
		}
		if (supplierGetRequest.getBankName() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("bankname = :bankname");
			paramValues.put("bankname", supplierGetRequest.getBankName());
		}
		if (supplierGetRequest.getBankAccNo() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("bankAcctNo = :bankAcctNo");
			paramValues.put("bankAcctNo", supplierGetRequest.getBankAccNo());
		}
		if (supplierGetRequest.getBankIfsc() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("bankifsc = :bankifsc");
			paramValues.put("bankifsc", supplierGetRequest.getBankIfsc());
		}
		if (supplierGetRequest.getTenantId() != null) {
			if (params.length() > 0)
				params.append(" and ");
			params.append("tenantid = :tenantid");
			paramValues.put("tenantid", supplierGetRequest.getTenantId());
		}
		Pagination<Supplier> page = new Pagination<>();
		if (supplierGetRequest.getPageSize() != null)
			page.setPageSize(supplierGetRequest.getPageSize());
		if (supplierGetRequest.getOffset() != null)
			page.setOffset(supplierGetRequest.getOffset());
		if (params.length() > 0)
			searchQuery = searchQuery.replace(":condition", " where " + params.toString());
		else
			searchQuery = searchQuery.replace(":condition", "");

		searchQuery = searchQuery.replace(":orderby", orderBy);
		page = (Pagination<Supplier>) getPagination(searchQuery, page, paramValues);

		searchQuery = searchQuery + " :pagination";
		searchQuery = searchQuery.replace(":pagination",
				"limit " + page.getPageSize() + " offset " + page.getOffset() * page.getPageSize());
		BeanPropertyRowMapper row = new BeanPropertyRowMapper(SupplierEntity.class);

		List<Supplier> suppliersList = new ArrayList<>();

		List<SupplierEntity> suppliersEntities = namedParameterJdbcTemplate.query(searchQuery.toString(), paramValues,
				row);

		for (SupplierEntity suppliersEntity : suppliersEntities) {

			suppliersList.add(suppliersEntity.toDomain());
		}

		page.setTotalResults(suppliersList.size());

		page.setPagedData(suppliersList);

		return page;
	}

}
