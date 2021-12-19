declare namespace Form.campaignactivity.Main {
  namespace CampaignActivity {
    namespace Tabs {
      interface CampaignActivity extends Xrm.SectionCollectionBase {
        get(name: "Anti Spam"): Xrm.PageSection;
        get(name: "Financials"): Xrm.PageSection;
        get(name: "Marketing list"): Xrm.PageSection;
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "Summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface audiences_tab extends Xrm.SectionCollectionBase {
        get(name: "excluded_accounts_section"): Xrm.PageSection;
        get(name: "excluded_contacts_section"): Xrm.PageSection;
        get(name: "excluded_leads_section"): Xrm.PageSection;
        get(name: "selected_accounts_section"): Xrm.PageSection;
        get(name: "selected_contacts_section"): Xrm.PageSection;
        get(name: "selected_leads_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualcost"): Xrm.NumberAttribute;
      get(name: "actualend"): Xrm.DateAttribute;
      get(name: "actualstart"): Xrm.DateAttribute;
      get(name: "budgetedcost"): Xrm.NumberAttribute;
      get(name: "channeltypecode"): Xrm.OptionSetAttribute<campaignactivity_channeltypecode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "excludeifcontactedinxdays"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "partners"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<campaignactivity_prioritycode>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"campaign">;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "scheduledstart"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<campaignactivity_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "typecode"): Xrm.OptionSetAttribute<campaignactivity_typecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actualcost"): Xrm.NumberControl;
      get(name: "actualend"): Xrm.DateControl;
      get(name: "actualstart"): Xrm.DateControl;
      get(name: "budgetedcost"): Xrm.NumberControl;
      get(name: "channeltypecode"): Xrm.OptionSetControl<campaignactivity_channeltypecode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "excluded_accounts"): Xrm.SubGridControl<"account">;
      get(name: "excluded_contacts"): Xrm.SubGridControl<"contact">;
      get(name: "excluded_leads"): Xrm.SubGridControl<"lead">;
      get(name: "excludeifcontactedinxdays"): Xrm.NumberControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_prioritycode"): Xrm.OptionSetControl<campaignactivity_prioritycode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<campaignactivity_statuscode>;
      get(name: "marketing_lists_grid"): Xrm.SubGridControl<"list">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "partners"): Xrm.LookupControl<"account" | "contact">;
      get(name: "regardingobjectid"): Xrm.LookupControl<"campaign">;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "scheduledstart"): Xrm.DateControl;
      get(name: "selected_accounts"): Xrm.SubGridControl<"account">;
      get(name: "selected_contacts"): Xrm.SubGridControl<"contact">;
      get(name: "selected_leads"): Xrm.SubGridControl<"lead">;
      get(name: "statuscode"): Xrm.OptionSetControl<campaignactivity_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "typecode"): Xrm.OptionSetControl<campaignactivity_typecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Campaign Activity"): Xrm.PageTab<Tabs.CampaignActivity>;
      get(name: "audiences_tab"): Xrm.PageTab<Tabs.audiences_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CampaignActivity extends Xrm.PageBase<CampaignActivity.Attributes,CampaignActivity.Tabs,CampaignActivity.Controls> {
    getAttribute(attributeName: "actualcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "actualend"): Xrm.DateAttribute;
    getAttribute(attributeName: "actualstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "budgetedcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "channeltypecode"): Xrm.OptionSetAttribute<campaignactivity_channeltypecode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "excludeifcontactedinxdays"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "partners"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<campaignactivity_prioritycode>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"campaign">;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<campaignactivity_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "typecode"): Xrm.OptionSetAttribute<campaignactivity_typecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actualcost"): Xrm.NumberControl;
    getControl(controlName: "actualend"): Xrm.DateControl;
    getControl(controlName: "actualstart"): Xrm.DateControl;
    getControl(controlName: "budgetedcost"): Xrm.NumberControl;
    getControl(controlName: "channeltypecode"): Xrm.OptionSetControl<campaignactivity_channeltypecode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "excluded_accounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "excluded_contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "excluded_leads"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "excludeifcontactedinxdays"): Xrm.NumberControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_prioritycode"): Xrm.OptionSetControl<campaignactivity_prioritycode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<campaignactivity_statuscode>;
    getControl(controlName: "marketing_lists_grid"): Xrm.SubGridControl<"list">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "partners"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"campaign">;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "scheduledstart"): Xrm.DateControl;
    getControl(controlName: "selected_accounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "selected_contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "selected_leads"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<campaignactivity_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "typecode"): Xrm.OptionSetControl<campaignactivity_typecode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
