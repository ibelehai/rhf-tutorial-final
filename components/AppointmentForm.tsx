import React from "react";
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FormProvider,
} from "react-hook-form";
import { Appointment, AppointmentPlan } from "../models";
import { AppointmentBaseForm } from "./AppointmentBaseForm";
import { AppointmentContactForm } from "./AppointmentContactForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";
import { Button } from "@mui/material";
import { AppointmentPets } from "./AppointmentPets";
import { DevTool } from "@hookform/devtools";

const defaultValues: Appointment = {
  title: "",
  date: new Date().toString(),
  plan: AppointmentPlan.Basic,
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    callMeBack: false,
  },
  pets: [
    {
      name: "",
      breed: "",
      description: "",
    },
  ],
};

export const AppointmentForm = () => {
  const form: UseFormReturn<Appointment, UseFormProps> = useForm<Appointment>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (form: Appointment) => {
    console.log(form);
  };

  const resetForm = () => {
    form.reset(defaultValues);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <h1 className="font-semibold mb-6 text-2xl text-center">
          Create a new appointment
        </h1>

        <AppointmentBaseForm />
        <AppointmentPets />
        <AppointmentContactForm />

        <div className="flex items-center space-x-4 mt-4">
          <div className="flex-1">
            <Button type="button" variant="text" fullWidth onClick={resetForm}>
              Clear
            </Button>
          </div>
          <div className="flex-grow">
            <Button type="submit" variant="outlined" fullWidth>
              Make an appointment!
            </Button>
          </div>
        </div>
      </form>
      <DevTool control={form.control} /> {/* set up the dev tool */}
    </FormProvider>
  );
};

export default AppointmentForm;
