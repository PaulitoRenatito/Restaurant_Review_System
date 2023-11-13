-- Table: public.restaurant
CREATE TABLE IF NOT EXISTS public.restaurant
(
    id integer NOT NULL DEFAULT nextval('restaurant_id_seq'::regclass),
    name text COLLATE pg_catalog."default" NOT NULL,
    type_of_kitchen text COLLATE pg_catalog."default" NOT NULL,
    phone text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    opening_hours text COLLATE pg_catalog."default" NOT NULL,
    address text COLLATE pg_catalog."default" NOT NULL,
    average_rating numeric(2,1),
    image text COLLATE pg_catalog."default",
    min_price numeric(8,2) NOT NULL,
    max_price numeric(8,2) NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL DEFAULT 'This restaurant has no description'::text,
    CONSTRAINT "restaurant_PK" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.restaurant
    OWNER to postgres;

-- SEQUENCE: public.restaurant_id_seq
CREATE SEQUENCE IF NOT EXISTS public.restaurant_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY restaurant.id;

ALTER SEQUENCE public.restaurant_id_seq
    OWNER TO postgres;