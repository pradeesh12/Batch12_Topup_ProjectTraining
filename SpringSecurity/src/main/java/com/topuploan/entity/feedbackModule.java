package com.topuploan.entity;

import javax.persistence.*;
@Entity
@Table
public class feedbackModule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id ;
    private String comments;
    private String rating;
    public feedbackModule() {
    }
    public feedbackModule(long id, String comments, String rating) {
        this.id = id;
        this.comments = comments;
        this.rating = rating;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getComments() {
        return comments;
    }
    public void setComments(String comments) {
        this.comments = comments;
    }
    public String getRating() {
        return rating;
    }
    public void setRating(String rating) {
        this.rating = rating;
    }
}
