import React from "react";
import { useFormContext, UseFormProps, UseFormReturn } from "react-hook-form";
import { Appointment } from "../models";
import { TextInput } from "./TextInput";
import { CheckboxInput } from "./CheckboxInput";

export const AppointmentContactForm = () => {
  const form: UseFormReturn<Appointment, UseFormProps> = useFormContext();

  return (
    <section>
      <h2 className="font-semibold my-4 text-lg">Contact information</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <TextInput
            name="contact.firstName"
            label="First name*"
            placeholder="Enter"
          />
        </div>
        <div className="col-span-1">
          <TextInput
            name="contact.lastName"
            label="Last name*"
            placeholder="Enter"
          />
        </div>
        <div className="col-span-1">
          <TextInput
            name="contact.phoneNumber"
            label="Phone number*"
            placeholder="Enter"
          />
        </div>
        <div className="col-span-1">
          <TextInput name="contact.email" label="Email" placeholder="Enter" />
        </div>

        <div className="col-span-2">
          <CheckboxInput
            name="contact.callMeBack"
            label="Call me back to confirm my order"
          />
        </div>
      </div>
    </section>
  );
};
