import { CheckCircle, XCircle } from "lucide-react";

/**
 * Above-the-fold qualification band. States Baja Glass's scope (custom frameless
 * new installs + frameless upgrades) and that we do not service other brands'
 * hardware, so repair/seal-replacement seekers self-select out before calling.
 */
const FramelessQualification = () => {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm sm:text-base">
          <p className="font-semibold whitespace-nowrap">
            Custom Frameless Shower Doors
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              New frameless installations
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              Frameless upgrades (replace your old framed door)
            </span>
            <span className="flex items-center gap-2 text-primary-foreground/80">
              <XCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              We don&apos;t service or repair other brands&apos; hardware
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FramelessQualification;
