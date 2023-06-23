INSERT INTO department (name)
VALUES
('Marketing'),
('Human Resources'),
('Customer Services'),
('Management');

INSERT INTO roles(title, salary, department_id)
VALUES
('Marketing Coordinator', 42000, 1),
('Digital Media Administrator', 70000, 1),
('Human Resources Assistant', 32000, 2),
('Chief Human Resources Officer', 65000, 2),
('Customer Service Associate', 20000, 3),
('Customer Service Shift Lead', 32000, 3),
('Director of Communications', 100000, 4),
('Chief Executive Director', 120000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Carl', 'Brennan', 1, 2),
('Ronan', 'Walter', 2, 7),
('Reece', 'Madden', 3, 4),
('Gregory', 'Nielsen', 4, 7),
('Luis', 'Delgado', 5, 6),
('Mitchell', 'Bradford', 6, 7),
('Maeve', 'Abbott', 7, 8),
('Maren', 'Werner', 8, NULL );