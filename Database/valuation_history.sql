-- Table: public.valuation_history
CREATE TABLE IF NOT EXISTS public.valuation_history
(
    user_id integer NOT NULL,
    restaurant_id integer NOT NULL,
    rating numeric(2,1) NOT NULL,
    comment text COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    hour time(4) with time zone NOT NULL,
    CONSTRAINT "valuation_history_id_PK" PRIMARY KEY (user_id, restaurant_id),
    CONSTRAINT "restaurant_id_FK" FOREIGN KEY (restaurant_id)
        REFERENCES public.restaurant (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "user_id_FK" FOREIGN KEY (user_id)
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT check_rating_range CHECK (rating >= 0.0 AND rating <= 5.0) NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.valuation_history
    OWNER to postgres;