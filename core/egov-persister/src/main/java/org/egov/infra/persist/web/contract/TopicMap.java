package org.egov.infra.persist.web.contract;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Map;

@Setter
@Getter
@ToString
public class TopicMap {

	private Map<String, Mapping> topicMap;
}
