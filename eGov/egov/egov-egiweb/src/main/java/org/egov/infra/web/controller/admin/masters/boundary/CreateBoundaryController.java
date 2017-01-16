/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 * accountability and the service delivery of the government  organizations.
 *
 *  Copyright (C) 2016  eGovernments Foundation
 *
 *  The updated version of eGov suite of products as by eGovernments Foundation
 *  is available at http://www.egovernments.org
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see http://www.gnu.org/licenses/ or
 *  http://www.gnu.org/licenses/gpl.html .
 *
 *  In addition to the terms of the GPL license to be adhered to in using this
 *  program, the following additional terms are to be complied with:
 *
 *      1) All versions of this program, verbatim or modified must carry this
 *         Legal Notice.
 *
 *      2) Any misrepresentation of the origin of the material is prohibited. It
 *         is required that all modified versions of this material be marked in
 *         reasonable ways as different from the original version.
 *
 *      3) This license does not grant any rights to any user of the program
 *         with regards to rights under trademark law for use of the trade names
 *         or trademarks of eGovernments Foundation.
 *
 *  In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */

package org.egov.infra.web.controller.admin.masters.boundary;

import org.egov.infra.admin.master.entity.Boundary;
import org.egov.infra.admin.master.entity.BoundaryType;
import org.egov.infra.admin.master.service.BoundaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
public class CreateBoundaryController {

    private static final String REDIRECT_URL_VIEW = "redirect:/view-boundary/";

    private final BoundaryService boundaryService;

    @Autowired
    public CreateBoundaryController(final BoundaryService boundaryService) {
        this.boundaryService = boundaryService;
    }

    @RequestMapping(value = "/boundary/create", method = RequestMethod.POST)
    public String createOrUpdateBoundary(@Valid @ModelAttribute final Boundary boundary, final BindingResult errors,
            final RedirectAttributes redirectAttributes, Model model) {
        BoundaryType boundaryType = boundary.getBoundaryType();
        if (errors.hasErrors()) {
            model.addAttribute("boundaryType", boundaryType);
            model.addAttribute("parentBoundary", boundaryService.getActiveBoundariesByBoundaryTypeId(boundaryType.getParent().getId()));
            return "boundary-create";
        }
        boundaryService.createBoundary(boundary);
        redirectAttributes.addFlashAttribute("boundary", boundary);
        redirectAttributes.addFlashAttribute("message", "msg.bndry.create.success");
        return REDIRECT_URL_VIEW + boundaryType.getHierarchyType().getId() + "," + boundaryType.getId();
    }

    @RequestMapping(value = "/wards-by-zone", method = GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Boundary> getWardByZone(@RequestParam final Long zoneId) throws IOException {
        return boundaryService.getActiveChildBoundariesByBoundaryId(zoneId);

    }

}
