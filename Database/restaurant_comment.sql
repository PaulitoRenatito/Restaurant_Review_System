-- Table: public.restaurant_comment
CREATE TABLE IF NOT EXISTS public.restaurant_comment
(
    user_id integer NOT NULL,
    restaurant_id integer NOT NULL,
    comment text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    hour time(4) with time zone NOT NULL,
    CONSTRAINT "restaurant_comment_PK" PRIMARY KEY (user_id, restaurant_id),
    CONSTRAINT "restaurant_id_FK" FOREIGN KEY (restaurant_id)
        REFERENCES public.restaurant (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "user_id_FK" FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.restaurant_comment
    OWNER to postgres;