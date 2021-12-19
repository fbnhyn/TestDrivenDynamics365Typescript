declare namespace Form.lead.QuickCreate {
  namespace LeadQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "budgetamount"): Xrm.NumberAttribute;
      get(name: "businesscard"): Xrm.Attribute<string>;
      get(name: "companyname"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "leadsourcecode"): Xrm.OptionSetAttribute<lead_leadsourcecode>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "budgetamount"): Xrm.NumberControl;
      get(name: "businesscard"): Xrm.StringControl;
      get(name: "companyname"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "leadsourcecode"): Xrm.OptionSetControl<lead_leadsourcecode>;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface LeadQuickCreate extends Xrm.PageBase<LeadQuickCreate.Attributes,LeadQuickCreate.Tabs,LeadQuickCreate.Controls> {
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "businesscard"): Xrm.Attribute<string>;
    getAttribute(attributeName: "companyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "leadsourcecode"): Xrm.OptionSetAttribute<lead_leadsourcecode>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"contact"> | null;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "budgetamount"): Xrm.NumberControl;
    getControl(controlName: "businesscard"): Xrm.StringControl;
    getControl(controlName: "companyname"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "leadsourcecode"): Xrm.OptionSetControl<lead_leadsourcecode>;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
