declare namespace Form.list.Main {
  namespace MarketingList {
    namespace Tabs {
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "campaigns"): Xrm.PageSection;
        get(name: "information"): Xrm.PageSection;
        get(name: "quickcampaigns"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface members extends Xrm.SectionCollectionBase {
        get(name: "listoperationssection"): Xrm.PageSection;
        get(name: "members"): Xrm.PageSection;
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
      get(name: "cost"): Xrm.NumberAttribute;
      get(name: "createdfromcode"): Xrm.OptionSetAttribute<list_createdfromcode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "lastusedon"): Xrm.DateAttribute;
      get(name: "listname"): Xrm.Attribute<string>;
      get(name: "lockstatus"): Xrm.OptionSetAttribute<boolean>;
      get(name: "membertype"): Xrm.NumberAttribute;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "purpose"): Xrm.Attribute<string>;
      get(name: "query"): Xrm.Attribute<string>;
      get(name: "source"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<list_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "type"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Campaigns"): Xrm.SubGridControl<"campaign">;
      get(name: "ListOperationsSubGrid"): Xrm.SubGridControl<"listoperation">;
      get(name: "QuickCampaigns"): Xrm.SubGridControl<"bulkoperation">;
      get(name: "accounts"): Xrm.SubGridControl<"account">;
      get(name: "accountsUCI"): Xrm.BaseControl;
      get(name: "contacts"): Xrm.SubGridControl<"contact">;
      get(name: "contactsUCI"): Xrm.BaseControl;
      get(name: "cost"): Xrm.NumberControl;
      get(name: "createdfromcode"): Xrm.OptionSetControl<list_createdfromcode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "dynamic_accounts"): Xrm.BaseControl;
      get(name: "dynamic_contacts"): Xrm.BaseControl;
      get(name: "dynamic_leads"): Xrm.BaseControl;
      get(name: "header_lastusedon"): Xrm.DateControl;
      get(name: "header_lockstatus"): Xrm.OptionSetControl<boolean>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "lastusedon"): Xrm.DateControl;
      get(name: "leads"): Xrm.SubGridControl<"lead">;
      get(name: "leadsUCI"): Xrm.BaseControl;
      get(name: "listname"): Xrm.StringControl;
      get(name: "lockstatus"): Xrm.OptionSetControl<boolean>;
      get(name: "membertype"): Xrm.NumberControl;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "purpose"): Xrm.StringControl;
      get(name: "query"): Xrm.StringControl;
      get(name: "source"): Xrm.StringControl;
      get(name: "statecode"): Xrm.OptionSetControl<list_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "type"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: "members"): Xrm.PageTab<Tabs.members>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface MarketingList extends Xrm.PageBase<MarketingList.Attributes,MarketingList.Tabs,MarketingList.Controls> {
    getAttribute(attributeName: "cost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "createdfromcode"): Xrm.OptionSetAttribute<list_createdfromcode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastusedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "listname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lockstatus"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "membertype"): Xrm.NumberAttribute;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "purpose"): Xrm.Attribute<string>;
    getAttribute(attributeName: "query"): Xrm.Attribute<string>;
    getAttribute(attributeName: "source"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<list_statecode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "type"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Campaigns"): Xrm.SubGridControl<"campaign">;
    getControl(controlName: "ListOperationsSubGrid"): Xrm.SubGridControl<"listoperation">;
    getControl(controlName: "QuickCampaigns"): Xrm.SubGridControl<"bulkoperation">;
    getControl(controlName: "accounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "accountsUCI"): Xrm.BaseControl;
    getControl(controlName: "contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "contactsUCI"): Xrm.BaseControl;
    getControl(controlName: "cost"): Xrm.NumberControl;
    getControl(controlName: "createdfromcode"): Xrm.OptionSetControl<list_createdfromcode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "dynamic_accounts"): Xrm.BaseControl;
    getControl(controlName: "dynamic_contacts"): Xrm.BaseControl;
    getControl(controlName: "dynamic_leads"): Xrm.BaseControl;
    getControl(controlName: "header_lastusedon"): Xrm.DateControl;
    getControl(controlName: "header_lockstatus"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "lastusedon"): Xrm.DateControl;
    getControl(controlName: "leads"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "leadsUCI"): Xrm.BaseControl;
    getControl(controlName: "listname"): Xrm.StringControl;
    getControl(controlName: "lockstatus"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "membertype"): Xrm.NumberControl;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "purpose"): Xrm.StringControl;
    getControl(controlName: "query"): Xrm.StringControl;
    getControl(controlName: "source"): Xrm.StringControl;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<list_statecode>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "type"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
