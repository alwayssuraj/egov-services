package org.egov.pgrrest.read.persistence;

import org.egov.pgrrest.read.domain.model.ServiceRequestRegistrationNumber;
import org.egov.pgrrest.read.persistence.repository.CrnRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.web.client.RestTemplate;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class CrnRepositoryTest {

    @Mock
    private RestTemplate restTemplate;

    @Test
    public void shouldGetCrn() {
        final String CRN_SERVICE_URL = "http://localhost:8088/";
        final String CRN = "crn_number";
        final ServiceRequestRegistrationNumber expected = new ServiceRequestRegistrationNumber(CRN);
        when(restTemplate.getForObject(CRN_SERVICE_URL, ServiceRequestRegistrationNumber.class))
                .thenReturn(expected);

        CrnRepository crnRepository = new CrnRepository(restTemplate, CRN_SERVICE_URL);

        ServiceRequestRegistrationNumber actual = crnRepository.getCrn();

        assertEquals(expected, actual);

        verify(restTemplate).getForObject(CRN_SERVICE_URL, ServiceRequestRegistrationNumber.class);
    }
}