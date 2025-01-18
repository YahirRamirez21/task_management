CREATE DATABASE task_management;
USE task_management;
CREATE TABLE tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    due_date DATE,
    status ENUM('pending', 'in_progress', 'completed')
);

DELIMITER //
CREATE PROCEDURE sp_get_all_tasks()
BEGIN
    SELECT * FROM tasks;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE sp_create_task(
    IN p_name VARCHAR(100), 
    IN p_description TEXT, 
    IN p_due_date DATE, 
    IN p_status ENUM('pending', 'in_progress', 'completed')
)
BEGIN
    INSERT INTO tasks (name, description, due_date, status) 
    VALUES (p_name, p_description, p_due_date, p_status);
END //
DELIMITER ;


DROP PROCEDURE IF EXISTS sp_update_task;
DELIMITER $$
CREATE PROCEDURE sp_update_task(
    IN p_id INT, 
    IN p_name VARCHAR(100), 
    IN p_description TEXT, 
    IN p_due_date DATE, 
    IN p_status ENUM('pending', 'in_progress', 'completed')
)
BEGIN
    UPDATE tasks 
    SET 
        name = IFNULL(p_name, name),  
        description = IFNULL(p_description, description), 
        due_date = IFNULL(p_due_date, due_date), 
        status = IFNULL(p_status, status)  
    WHERE id = p_id;
END $$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE sp_delete_task(
    IN p_id INT
)
BEGIN
    DELETE FROM tasks 
    WHERE id = p_id;
END $$
DELIMITER ;

