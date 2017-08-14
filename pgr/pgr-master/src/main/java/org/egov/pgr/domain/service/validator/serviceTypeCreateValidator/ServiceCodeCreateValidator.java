package org.egov.pgr.domain.service.validator.serviceTypeCreateValidator;

import org.egov.pgr.domain.exception.PGRMasterException;
import org.egov.pgr.domain.model.ServiceType;
import org.egov.pgr.persistence.repository.ServiceTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class ServiceCodeCreateValidator implements ServiceTypeCreateValidator {

    public static final String FIELD = "field";
    public static final String MESSAGE = "message";
    public static final String CODE = "code";
    @Autowired
    private ServiceTypeRepository serviceTypeRepository;

    @Override
    public boolean canValidate(ServiceType serviceType) {
        return true;
    }


    @Override
    public void checkMandatoryField(ServiceType serviceType) {

        if (serviceType.isTenantIdAbsent()) {
            HashMap<String, String> error = new HashMap<>();
            error.put("code", "tenantId Validator.1");
            error.put("field", "serviceType.tenantId");
            error.put("message", "tenantId mandatory ");
            throw new PGRMasterException(error);
        }

        if (serviceType.isServiceCodeAbsent()) {
            HashMap<String, String> error = new HashMap<>();
            error.put("code", "serviceCode Validator.2");
            error.put("field", "serviceType.serviceCode");
            error.put("message", "serviceCode mandatory ");
            throw new PGRMasterException(error);
        }

        if (serviceType.isServiceNameAbsent()) {
            HashMap<String, String> error = new HashMap<>();
            error.put("code", "serviceName Vaalidator.3");
            error.put("field", "serviceType.serviceName");
            error.put("message", "serviceName mandatory ");
            throw new PGRMasterException(error);
        }

    }

    @Override
    public void validateUniqueCombinations(ServiceType serviceType) {

        List<org.egov.pgr.domain.model.ServiceType> serviceTypeList = serviceTypeRepository.getCodeTenantData(serviceType);
        List<org.egov.pgr.domain.model.ServiceType> getall = serviceTypeRepository.getData(serviceType);

        List<org.egov.pgr.domain.model.ServiceType> categoryTypeList = serviceTypeRepository.getCodeTenantDataFromCategory(serviceType);

        if (categoryTypeList.isEmpty()) {
            HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.");
            error.put(FIELD, "serviceTypeConfiguration.category");
            error.put(MESSAGE, "category data not exist");
            throw new PGRMasterException(error);
        }

        if (!serviceTypeList.isEmpty()
                && (serviceTypeList.get(0).getServiceCode().equalsIgnoreCase(serviceType.getServiceCode())
                && serviceTypeList.get(0).getTenantId().equalsIgnoreCase(serviceType.getTenantId()))) {
            HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.4");
            error.put(FIELD, "serviceTypeConfiguration.serviceCode");
            error.put(MESSAGE, "serviceCode already exists");
            throw new PGRMasterException(error);
        }

        if (!getall.isEmpty()
                && (getall.get(0).getServiceCode().equalsIgnoreCase(serviceType.getServiceCode())
                && getall.get(0).getCategory() == serviceType.getCategory()
                && (getall.get(0).getServiceName().equalsIgnoreCase(serviceType.getServiceName()))
                && getall.get(0).getTenantId().equalsIgnoreCase(serviceType.getTenantId()))) {
            HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.5");
            error.put(FIELD, "serviceTypeConfiguration.serviceCode");
            error.put(MESSAGE, "serviceCode already exists");
            throw new PGRMasterException(error);
        }

    }


	@Override
	public void lengthValidate(ServiceType serviceType) {
		
		if(!serviceType.isTenantIdLengthMatch())	
		{
			HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.6");
            error.put(FIELD, "ServiceLengthValidator.tenant");
            error.put(MESSAGE, "tenant Id should be >0 and <=256");
            throw new PGRMasterException(error);
			
		}
		if(!serviceType.isDescriptionLengthMatch())	
		{
			HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.6");
            error.put(FIELD, "ServiceLengthValidator.Description");
            error.put(MESSAGE, "Description Length should be >0 and <=250");
            throw new PGRMasterException(error);
			
		}
		if(!serviceType.isCodeLengthMatch())	
		{
			HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceLengthValidator.7");
            error.put(FIELD, "ServiceLengthValidator.Code");
            error.put(MESSAGE, "code should be >0 and <=20");
            throw new PGRMasterException(error);
			
		}
		
		if(!serviceType.isnameLengthMatch())	
		{
			HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.9");
            error.put(FIELD, "ServiceLengthValidator.name");
            error.put(MESSAGE, "name should be >0 and <=150");
            throw new PGRMasterException(error);
			
		}
		if(!serviceType.isTypeLengthMatch())	
		{
			HashMap<String, String> error = new HashMap<>();
            error.put(CODE, "ServiceCodeValidator.10");
            error.put(FIELD, "ServiceLengthValidator.type");
            error.put(MESSAGE, "type should be >0 and <=50");
            throw new PGRMasterException(error);
			
		}
		}
    
}