package com.ifsaid.baodao.common.exception;

/**
 * @author: Wang Chen Chen
 * @Date: 2018/11/15 15:49
 * @describe：
 * @version: 1.0
 */
public class UserExistsException extends RuntimeException {

    public UserExistsException(String message) {
        super(message);
    }

}
