declare namespace Form.msdyn_agreement.Main {
  namespace Agreement {
    namespace Tabs {
      interface _4c8bef3be06c4411b31259f180556e4d extends Xrm.SectionCollectionBase {
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "{3568be1d-2a14-40a9-b8cd-b04e3806e3e2}"): Xrm.PageSection;
        get(name: "{4c8bef3b-e06c-4411-b312-59f180556e4d}_section_2"): Xrm.PageSection;
        get(name: "{4c8bef3b-e06c-4411-b312-59f180556e4d}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _7a6686d372ad47249c465ba3c5fae32d extends Xrm.SectionCollectionBase {
        get(name: "{2bcf1be9-1ceb-434d-9866-6486738f2acc}"): Xrm.PageSection;
        get(name: "{7a6686d3-72ad-4724-9c46-5ba3c5fae32d}_section_3"): Xrm.PageSection;
        get(name: "{bc490053-f7d4-44e2-bfb7-1ca938f59e1b}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: "tab_3_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_agreementdetails"): Xrm.Attribute<string>;
      get(name: "msdyn_agreementrecordgeneration"): Xrm.DateAttribute;
      get(name: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_datecanceled"): Xrm.DateAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_enddate"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_originatingagreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_salestaxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
      get(name: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
      get(name: "msdyn_startdate"): Xrm.DateAttribute;
      get(name: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_agreementsubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_agreementsystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ContractLines"): Xrm.SubGridControl<"salesorderdetail">;
      get(name: "QuotesLinesGrid"): Xrm.SubGridControl<"quotedetail">;
      get(name: "WebResource_AgreementRecordGeneration_TimeField"): Xrm.WebResourceControl;
      get(name: "bookingsgrid"): Xrm.SubGridControl<"msdyn_agreementbookingsetup">;
      get(name: "header_msdyn_name"): Xrm.StringControl;
      get(name: "header_msdyn_serviceaccount"): Xrm.LookupControl<"account">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_msdyn_billingaccount"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_duration"): Xrm.NumberControl | null;
      get(name: "header_process_msdyn_enddate"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_pricelist"): Xrm.LookupControl<"pricelevel"> | null;
      get(name: "header_process_msdyn_serviceaccount"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_startdate"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_substatus"): Xrm.LookupControl<"msdyn_agreementsubstatus"> | null;
      get(name: "header_process_msdyn_substatus_1"): Xrm.LookupControl<"msdyn_agreementsubstatus"> | null;
      get(name: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_2"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
      get(name: "invoicegrid"): Xrm.SubGridControl<"msdyn_agreementinvoicesetup">;
      get(name: "msdyn_agreementdetails"): Xrm.StringControl;
      get(name: "msdyn_agreementrecordgeneration"): Xrm.DateControl;
      get(name: "msdyn_agreementrecordgeneration1"): Xrm.DateControl;
      get(name: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_datecanceled"): Xrm.DateControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_enddate"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_originatingagreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_salestaxcode"): Xrm.LookupControl<"msdyn_taxcode">;
      get(name: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
      get(name: "msdyn_startdate"): Xrm.DateControl;
      get(name: "msdyn_substatus"): Xrm.LookupControl<"msdyn_agreementsubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_agreementsystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{4c8bef3b-e06c-4411-b312-59f180556e4d}"): Xrm.PageTab<Tabs._4c8bef3be06c4411b31259f180556e4d>;
      get(name: "{7a6686d3-72ad-4724-9c46-5ba3c5fae32d}"): Xrm.PageTab<Tabs._7a6686d372ad47249c465ba3c5fae32d>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Agreement extends Xrm.PageBase<Agreement.Attributes,Agreement.Tabs,Agreement.Controls> {
    getAttribute(attributeName: "msdyn_agreementdetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_agreementrecordgeneration"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_datecanceled"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_originatingagreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_salestaxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
    getAttribute(attributeName: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_serviceterritory"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "msdyn_startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_agreementsubstatus">;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_agreementsystemstatus>;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ContractLines"): Xrm.SubGridControl<"salesorderdetail">;
    getControl(controlName: "QuotesLinesGrid"): Xrm.SubGridControl<"quotedetail">;
    getControl(controlName: "WebResource_AgreementRecordGeneration_TimeField"): Xrm.WebResourceControl;
    getControl(controlName: "bookingsgrid"): Xrm.SubGridControl<"msdyn_agreementbookingsetup">;
    getControl(controlName: "header_msdyn_name"): Xrm.StringControl;
    getControl(controlName: "header_msdyn_serviceaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_msdyn_billingaccount"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_duration"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_msdyn_enddate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_pricelist"): Xrm.LookupControl<"pricelevel"> | null;
    getControl(controlName: "header_process_msdyn_serviceaccount"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_startdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_substatus"): Xrm.LookupControl<"msdyn_agreementsubstatus"> | null;
    getControl(controlName: "header_process_msdyn_substatus_1"): Xrm.LookupControl<"msdyn_agreementsubstatus"> | null;
    getControl(controlName: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_2"): Xrm.OptionSetControl<msdyn_agreementsystemstatus> | null;
    getControl(controlName: "invoicegrid"): Xrm.SubGridControl<"msdyn_agreementinvoicesetup">;
    getControl(controlName: "msdyn_agreementdetails"): Xrm.StringControl;
    getControl(controlName: "msdyn_agreementrecordgeneration"): Xrm.DateControl;
    getControl(controlName: "msdyn_agreementrecordgeneration1"): Xrm.DateControl;
    getControl(controlName: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_datecanceled"): Xrm.DateControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_enddate"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_originatingagreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_salestaxcode"): Xrm.LookupControl<"msdyn_taxcode">;
    getControl(controlName: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_serviceterritory"): Xrm.LookupControl<"territory">;
    getControl(controlName: "msdyn_startdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_substatus"): Xrm.LookupControl<"msdyn_agreementsubstatus">;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_agreementsystemstatus>;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
