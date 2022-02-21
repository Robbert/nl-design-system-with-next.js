import { useTranslation } from "next-i18next";
import { FormStateDispatch, State, useInput } from "../../form/action/reducer";
import { Input } from "../Input";
import { Heading1 } from "../utrecht/Heading1";

export const PersonalDetails = ({ dispatch, state }: { dispatch: FormStateDispatch; state: State }) => {
  const { t } = useTranslation("stepper-form");
  console.log("state", state);
  return (
    <>
      <Heading1 className="utrecht-heading-1--distanced">{t("your-personal-details")}</Heading1>

      <Input
        state={state.fields[0]}
        className="todo-radio-group todo-radio-group--inline"
        {...useInput(state.fields[0], dispatch)}
      />

      <Input state={state.fields[1]} {...useInput(state.fields[1], dispatch)} />

      <Input state={state.fields[2]} {...useInput(state.fields[2], dispatch)} />
    </>
  );
};
