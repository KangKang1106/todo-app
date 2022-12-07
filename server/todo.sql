CREATE TABLE todo (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  done TINYINT(1) NOT NULL DEFAULT '0'
);

INSERT INTO todo (title, done) VALUES ('kang todo1', 0);
INSERT INTO todo (title, done) VALUES ('kang todo2', 1);
INSERT INTO todo (title, done) VALUES ('kang todo3', 0);
INSERT INTO todo (title, done) VALUES ('kang todo4', 1);
INSERT INTO todo (title, done) VALUES ('kang todo5', 1);
INSERT INTO todo (title, done) VALUES ('kang todo6', 0);
