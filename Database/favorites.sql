-- Table: public.favorites
CREATE TABLE IF NOT EXISTS public.favorites
(
    user_id integer NOT NULL,
    restaurant_id integer NOT NULL,
    CONSTRAINT "favorites_id_PK" PRIMARY KEY (user_id, restaurant_id),
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

ALTER TABLE IF EXISTS public.favorites
    OWNER to postgres;