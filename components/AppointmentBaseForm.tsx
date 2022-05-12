import React from "react";
import { AppointmentPlan } from "../models";
import { TextInput } from "./TextInput";
import { SelectInput, SelectInputOption } from "./SelectInput";
import { DateInput } from "./DateInput";

const planOptions: SelectInputOption[] = [
  {
    title: "Basic plan",
    value: AppointmentPlan.Basic,
  },
  {
    title: "Premium plan",
    value: AppointmentPlan.Premium,
  },
];

export const AppointmentBaseForm = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <TextInput name="title" label="Title*" placeholder="Enter" />
        </div>
        <div className="col-span-1">
          <DateInput name="date" label="Date*" placeholder="Select date" />
        </div>
        <div className="col-span-1">
          <SelectInput
            name="plan"
            label="Plan"
            placeholder="Select plan"
            options={planOptions}
          />
        </div>
      </div>
    </section>
  );
};
