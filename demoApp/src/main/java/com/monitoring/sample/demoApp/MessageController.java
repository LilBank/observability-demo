package com.monitoring.sample.demoApp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Random;

@RestController
@RequestMapping("/api")
public class MessageController extends BaseController {
    Random random = new Random();

    @GetMapping("/message")
    public Message message() {
        logger.info("[INFO] GET /message called");
        int randInt = random.nextInt(1000);
        return new Message(String.format("This is a message from Spring boot, random int: %d", randInt));
    }
}
