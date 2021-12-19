declare namespace Form.campaign.Main {
  namespace Campaign {
    namespace Tabs {
      interface DETAILS extends Xrm.SectionCollectionBase {
        get(name: "ADMINISTRATION"): Xrm.PageSection;
        get(name: "DESCRIPTION"): Xrm.PageSection;
        get(name: "FINANCIALS"): Xrm.PageSection;
        get(name: "RESPONSES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface SUMMARY extends Xrm.SectionCollectionBase {
        get(name: "CAMPAIGN"): Xrm.PageSection;
        get(name: "CAMPAIGN ACTIVITIES"): Xrm.PageSection;
        get(name: "LEADS"): Xrm.PageSection;
        get(name: "LISTS"): Xrm.PageSection;
        get(name: "OFFER"): Xrm.PageSection;
        get(name: "RELATED PANE"): Xrm.PageSection;
        get(name: "SCHEDULES"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualend"): Xrm.DateAttribute;
      get(name: "actualstart"): Xrm.DateAttribute;
      get(name: "budgetedcost"): Xrm.NumberAttribute;
      get(name: "codename"): Xrm.Attribute<string>;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "expectedresponse"): Xrm.NumberAttribute;
      get(name: "expectedrevenue"): Xrm.NumberAttribute;
      get(name: "istemplate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "objective"): Xrm.Attribute<string>;
      get(name: "othercost"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "proposedend"): Xrm.DateAttribute;
      get(name: "proposedstart"): Xrm.DateAttribute;
      get(name: "statuscode"): Xrm.OptionSetAttribute<campaign_statuscode>;
      get(name: "tmpregardingobjectid"): Xrm.Attribute<string>;
      get(name: "totalactualcost"): Xrm.NumberAttribute;
      get(name: "totalcampaignactivityactualcost"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "typecode"): Xrm.OptionSetAttribute<campaign_typecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Activities"): Xrm.SubGridControl<"campaignactivity">;
      get(name: "Leads"): Xrm.SubGridControl<"lead">;
      get(name: "Lists"): Xrm.SubGridControl<"list">;
      get(name: "Responses"): Xrm.SubGridControl<"campaignresponse">;
      get(name: "actualend"): Xrm.DateControl;
      get(name: "actualstart"): Xrm.DateControl;
      get(name: "budgetedcost"): Xrm.NumberControl;
      get(name: "codename"): Xrm.StringControl;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "expectedresponse"): Xrm.NumberControl;
      get(name: "header_expectedrevenue"): Xrm.NumberControl;
      get(name: "header_istemplate"): Xrm.OptionSetControl<boolean>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<campaign_statuscode>;
      get(name: "modifiedby"): Xrm.LookupControl<"systemuser">;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "objective"): Xrm.StringControl;
      get(name: "othercost"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "proposedend"): Xrm.DateControl;
      get(name: "proposedstart"): Xrm.DateControl;
      get(name: "tmpregardingobjectid"): Xrm.StringControl;
      get(name: "totalactualcost"): Xrm.NumberControl;
      get(name: "totalcampaignactivityactualcost"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "typecode"): Xrm.OptionSetControl<campaign_typecode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DETAILS"): Xrm.PageTab<Tabs.DETAILS>;
      get(name: "SUMMARY"): Xrm.PageTab<Tabs.SUMMARY>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Campaign extends Xrm.PageBase<Campaign.Attributes,Campaign.Tabs,Campaign.Controls> {
    getAttribute(attributeName: "actualend"): Xrm.DateAttribute;
    getAttribute(attributeName: "actualstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "budgetedcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "codename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "expectedresponse"): Xrm.NumberAttribute;
    getAttribute(attributeName: "expectedrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "istemplate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "objective"): Xrm.Attribute<string>;
    getAttribute(attributeName: "othercost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "proposedend"): Xrm.DateAttribute;
    getAttribute(attributeName: "proposedstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<campaign_statuscode>;
    getAttribute(attributeName: "tmpregardingobjectid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "totalactualcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalcampaignactivityactualcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "typecode"): Xrm.OptionSetAttribute<campaign_typecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Activities"): Xrm.SubGridControl<"campaignactivity">;
    getControl(controlName: "Leads"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "Lists"): Xrm.SubGridControl<"list">;
    getControl(controlName: "Responses"): Xrm.SubGridControl<"campaignresponse">;
    getControl(controlName: "actualend"): Xrm.DateControl;
    getControl(controlName: "actualstart"): Xrm.DateControl;
    getControl(controlName: "budgetedcost"): Xrm.NumberControl;
    getControl(controlName: "codename"): Xrm.StringControl;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "expectedresponse"): Xrm.NumberControl;
    getControl(controlName: "header_expectedrevenue"): Xrm.NumberControl;
    getControl(controlName: "header_istemplate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<campaign_statuscode>;
    getControl(controlName: "modifiedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "objective"): Xrm.StringControl;
    getControl(controlName: "othercost"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "proposedend"): Xrm.DateControl;
    getControl(controlName: "proposedstart"): Xrm.DateControl;
    getControl(controlName: "tmpregardingobjectid"): Xrm.StringControl;
    getControl(controlName: "totalactualcost"): Xrm.NumberControl;
    getControl(controlName: "totalcampaignactivityactualcost"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "typecode"): Xrm.OptionSetControl<campaign_typecode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
