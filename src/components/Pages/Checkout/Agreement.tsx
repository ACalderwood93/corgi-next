import Checkbox from "@/components/Checkbox";
import CtaButton from "@/components/CtaButton";

const Agreement = () => {
  return (
    <div className="flex flex-col px-4">
      <h1>Checking your cover</h1>
      <Checkbox
        id="ownerOccupier"
        label="I'm the homeowner and live here. My home is not a guest house or bed and  breakfast."
      />
      <Checkbox
        id="gasBoiler"
        label="I have one boiler which uses natural gas and doesn’t need repairs."
      />
      <h3 className="font-bold">Renewing your policy</h3>
      <p className="text-sm py-2">
        We’ll be in touch before the end of your cover, but if you want, we can
        set your cover plan to automatically renew now. You can change your mind
        at any time.
      </p>
      <Checkbox
        id="autoRenew"
        label="I'm happy to auto-renew my policy each year."
      />
      <h3 className="font-bold">Receiving your documents</h3>
      <p className="text-sm py-2">
        Prefer not to have lots of paper to file away? We can send everything
        you need to know in an email.
      </p>
      <Checkbox
        id="paperless"
        label="lets go paperless and send me my documents by email."
      />
      <CtaButton className="mt-4">Next</CtaButton>
    </div>
  );
};

export default Agreement;
