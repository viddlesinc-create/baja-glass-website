import { FinalCTA } from "./FinalCTA";

interface QuickQuoteFormProps {
  successMessage?: string;
  formspreeUrl?: string;
  requireAllFields?: boolean;
}

export const QuickQuoteForm = ({
  successMessage,
  formspreeUrl,
  requireAllFields,
}: QuickQuoteFormProps) => (
  <FinalCTA
    successMessage={successMessage}
    formspreeUrl={formspreeUrl}
    requireAllFields={requireAllFields}
  />
);
