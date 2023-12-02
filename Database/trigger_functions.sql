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




--FUNCTION DONT LET USER BE DELETED
CREATE OR REPLACE FUNCTION prevent_user_deletion()
  RETURNS TRIGGER AS
$BODY$
BEGIN

  IF EXISTS (SELECT 1 FROM public.valuation V natural join public.user U
			 WHERE V.user_id = U.id) THEN
    RAISE EXCEPTION 'Cannot delete user with existing valuations.';
  END IF;


  RETURN OLD;
END;
$BODY$
LANGUAGE plpgsql;


CREATE OR REPLACE TRIGGER prevent_user_deletion_trigger
BEFORE DELETE
ON public.user
FOR EACH ROW
EXECUTE FUNCTION prevent_user_deletion();




--FUNCTION -- NO RESTAURANTS WITH THE SAME NAME
CREATE OR REPLACE FUNCTION prevent_restaurant_equal_name()
  RETURNS TRIGGER AS
$BODY$
BEGIN

  IF (SELECT 1 FROM public.restaurant R
			 WHERE R.name = R.name) THEN
    RAISE EXCEPTION 'Cannot exist restaurants with the same name';
  END IF;


  RETURN OLD;
END;
$BODY$
LANGUAGE plpgsql;


CREATE OR REPLACE TRIGGER prevent_restaurant_equal_name_trigger
BEFORE INSERT
ON public.restaurant
FOR EACH ROW
EXECUTE FUNCTION prevent_restaurant_equal_name();






--FUNCTION -- WHEN DELETED RESTAURANT CLEAR ALL THE IS CLOSE TO HIM
CREATE OR REPLACE FUNCTION delete_restaurant()
  RETURNS TRIGGER AS
$BODY$
BEGIN

	DELETE FROM public.valuation V
			 WHERE V.restaurant_id = OLD.id;

	DELETE FROM public.valuation_history VH
			WHERE VH.restaurant_id = OLD.id;

	DELETE FROM public.favorites F
			WHERE F.restaurant_id = OLD.id;




  RETURN OLD;
END;
$BODY$
LANGUAGE plpgsql;


CREATE OR REPLACE TRIGGER clean_traces_deleted_restaurant_trigger
BEFORE DELETE
ON public.restaurant
FOR EACH ROW
EXECUTE FUNCTION delete_restaurant();

