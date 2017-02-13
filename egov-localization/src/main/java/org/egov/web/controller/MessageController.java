package org.egov.web.controller;

import org.egov.persistence.repository.MessageRepository;
import org.egov.web.contract.CreateMessagesRequest;
import org.egov.web.contract.Message;
import org.egov.web.contract.MessagesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/messages")
public class MessageController {

    private MessageRepository messageRepository;

    @Autowired
    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping()
    public MessagesResponse getMessagesForLocale(@RequestParam("locale") String locale,
                                                 @RequestParam("jurisdictionId") String jurisdictionId) {
        final List<Message> messages = getMessages(locale, jurisdictionId);
        return new MessagesResponse(messages);
    }

    @PostMapping()
    public MessagesResponse createMessages(@Valid @RequestBody CreateMessagesRequest messageRequest) {
        final List<org.egov.persistence.entity.Message> entityMessages = messageRequest.toEntityMessages();
        messageRepository.save(entityMessages);
        List<Message> messages = mapToContractMessages(entityMessages);
        return new MessagesResponse(messages);
    }

    private List<Message> mapToContractMessages(List<org.egov.persistence.entity.Message> entityMessages) {
        return entityMessages.stream()
                .map(Message::new)
                .collect(Collectors.toList());
    }

    private List<Message> getMessages(String locale, String jurisdictionId) {
        return mapToContractMessages(messageRepository.findByJurisdictionIdAndLocale(jurisdictionId, locale));
    }

}