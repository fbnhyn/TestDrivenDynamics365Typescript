declare namespace Form.contract.Main {
  namespace Information {
    namespace Tabs {
      interface details extends Xrm.SectionCollectionBase {
        get(name: "contract type"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "history"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "header"): Xrm.PageSection;
        get(name: "pricing"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "activeon"): Xrm.DateAttribute;
      get(name: "billingcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "billingendon"): Xrm.DateAttribute;
      get(name: "billingfrequencycode"): Xrm.OptionSetAttribute<contract_billingfrequencycode>;
      get(name: "billingstarton"): Xrm.DateAttribute;
      get(name: "billtoaddress"): Xrm.LookupAttribute<"customeraddress">;
      get(name: "cancelon"): Xrm.DateAttribute;
      get(name: "contractlanguage"): Xrm.Attribute<string>;
      get(name: "contractnumber"): Xrm.Attribute<string>;
      get(name: "contractservicelevelcode"): Xrm.OptionSetAttribute<contract_contractservicelevelcode>;
      get(name: "contracttemplateid"): Xrm.LookupAttribute<"contracttemplate">;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "duration"): Xrm.NumberAttribute;
      get(name: "expireson"): Xrm.DateAttribute;
      get(name: "netprice"): Xrm.NumberAttribute;
      get(name: "originatingcontract"): Xrm.LookupAttribute<"contract">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "serviceaddress"): Xrm.LookupAttribute<"customeraddress">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "totaldiscount"): Xrm.NumberAttribute;
      get(name: "totalprice"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "usediscountaspercentage"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "activeon"): Xrm.DateControl;
      get(name: "billingcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "billingendon"): Xrm.DateControl;
      get(name: "billingfrequencycode"): Xrm.OptionSetControl<contract_billingfrequencycode>;
      get(name: "billingstarton"): Xrm.DateControl;
      get(name: "billtoaddress"): Xrm.LookupControl<"customeraddress">;
      get(name: "cancelon"): Xrm.DateControl;
      get(name: "contractlanguage"): Xrm.StringControl;
      get(name: "contractnumber"): Xrm.StringControl;
      get(name: "contractservicelevelcode"): Xrm.OptionSetControl<contract_contractservicelevelcode>;
      get(name: "contracttemplateid"): Xrm.LookupControl<"contracttemplate">;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "duration"): Xrm.NumberControl;
      get(name: "expireson"): Xrm.DateControl;
      get(name: "netprice"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingcontract"): Xrm.LookupControl<"contract">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "serviceaddress"): Xrm.LookupControl<"customeraddress">;
      get(name: "title"): Xrm.StringControl;
      get(name: "totaldiscount"): Xrm.NumberControl;
      get(name: "totalprice"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "usediscountaspercentage"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "activeon"): Xrm.DateAttribute;
    getAttribute(attributeName: "billingcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "billingendon"): Xrm.DateAttribute;
    getAttribute(attributeName: "billingfrequencycode"): Xrm.OptionSetAttribute<contract_billingfrequencycode>;
    getAttribute(attributeName: "billingstarton"): Xrm.DateAttribute;
    getAttribute(attributeName: "billtoaddress"): Xrm.LookupAttribute<"customeraddress">;
    getAttribute(attributeName: "cancelon"): Xrm.DateAttribute;
    getAttribute(attributeName: "contractlanguage"): Xrm.Attribute<string>;
    getAttribute(attributeName: "contractnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "contractservicelevelcode"): Xrm.OptionSetAttribute<contract_contractservicelevelcode>;
    getAttribute(attributeName: "contracttemplateid"): Xrm.LookupAttribute<"contracttemplate">;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "expireson"): Xrm.DateAttribute;
    getAttribute(attributeName: "netprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "originatingcontract"): Xrm.LookupAttribute<"contract">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "serviceaddress"): Xrm.LookupAttribute<"customeraddress">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "totaldiscount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "usediscountaspercentage"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "activeon"): Xrm.DateControl;
    getControl(controlName: "billingcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "billingendon"): Xrm.DateControl;
    getControl(controlName: "billingfrequencycode"): Xrm.OptionSetControl<contract_billingfrequencycode>;
    getControl(controlName: "billingstarton"): Xrm.DateControl;
    getControl(controlName: "billtoaddress"): Xrm.LookupControl<"customeraddress">;
    getControl(controlName: "cancelon"): Xrm.DateControl;
    getControl(controlName: "contractlanguage"): Xrm.StringControl;
    getControl(controlName: "contractnumber"): Xrm.StringControl;
    getControl(controlName: "contractservicelevelcode"): Xrm.OptionSetControl<contract_contractservicelevelcode>;
    getControl(controlName: "contracttemplateid"): Xrm.LookupControl<"contracttemplate">;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "duration"): Xrm.NumberControl;
    getControl(controlName: "expireson"): Xrm.DateControl;
    getControl(controlName: "netprice"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingcontract"): Xrm.LookupControl<"contract">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "serviceaddress"): Xrm.LookupControl<"customeraddress">;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "totaldiscount"): Xrm.NumberControl;
    getControl(controlName: "totalprice"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "usediscountaspercentage"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
