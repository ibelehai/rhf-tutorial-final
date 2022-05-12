import React from "react";
import { TextInput } from "./TextInput";
import { Button } from "@mui/material";

interface AppointmentPetFormProps {
  index: number;
  onRemove: (index: number) => void;
  disableRemoveButton: boolean;
}

export const AppointmentPetForm = ({
  index,
  onRemove,
  disableRemoveButton,
}: AppointmentPetFormProps) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <p className="mb-2 text-gray-400 font-semibold">Pet {index + 1}</p>
        <Button
          color="error"
          variant="outlined"
          disabled={disableRemoveButton}
          onClick={() => onRemove(index)}
        >
          Remove
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6 pb-6">
        <div className="col-span-1">
          <TextInput
            name={`pets[${index}].name`}
            label="Name*"
            placeholder="Enter"
          />
        </div>
        <div className="col-span-1">
          <TextInput
            name={`pets[${index}].breed`}
            label="Breed*"
            placeholder="Enter"
          />
        </div>
        <div className="col-span-2">
          <TextInput
            name={`pets[${index}].description`}
            label="Description"
            placeholder="Enter"
          />
        </div>
      </div>
    </section>
  );
};
