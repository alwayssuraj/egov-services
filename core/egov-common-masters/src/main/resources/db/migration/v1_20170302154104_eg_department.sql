CREATE TABLE eg_department (
	id BIGINT NOT NULL,
	name CHARACTER VARYING(64) NOT NULL,
	code CHARACTER VARYING(10) NOT NULL,
	active BOOLEAN NOT NULL,
	tenantId CHARACTER VARYING(250) NOT NULL,

	CONSTRAINT pk_eg_department PRIMARY KEY (id),
	CONSTRAINT uk_eg_department_code UNIQUE KEY (code),
	CONSTRAINT uk_eg_department_name UNIQUE KEY (name)
);

CREATE SEQUENCE seq_eg_department
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;