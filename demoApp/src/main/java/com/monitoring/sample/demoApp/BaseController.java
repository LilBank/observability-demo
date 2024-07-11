package com.monitoring.sample.demoApp;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public abstract class BaseController {
    protected final Logger logger = LogManager.getLogger(this.getClass());
}
