-- FUNCTION: public.register_valuation()
CREATE OR REPLACE FUNCTION public.register_valuation()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
	BEGIN
		INSERT INTO valuation_history (user_id, restaurant_id, rating, comment, date, hour)
		VALUES (NEW.user_id, NEW.restaurant_id, NEW.rating, NEW.comment, NEW.date, NEW.hour);
		RETURN NEW;
	END;
$BODY$;

ALTER FUNCTION public.register_valuation()
    OWNER TO postgres;

-- FUNCTION: public.update_restaurant_average_rating()
CREATE OR REPLACE FUNCTION public.update_restaurant_average_rating()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN
  UPDATE restaurant
  SET average_rating = (
    SELECT AVG(rating)
    FROM valuation
    WHERE "restaurant_id" = NEW."restaurant_id"
  )
  WHERE "id" = NEW."restaurant_id";
  RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.update_restaurant_average_rating()
    OWNER TO postgres;