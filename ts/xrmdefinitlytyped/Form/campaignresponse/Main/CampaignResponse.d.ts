declare namespace Form.campaignresponse.Main {
  namespace CampaignResponse {
    namespace Tabs {
      interface campaignresponse extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "details"): Xrm.PageSection;
        get(name: "received from"): Xrm.PageSection;
        get(name: "summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "channeltypecode"): Xrm.OptionSetAttribute<campaignresponse_channeltypecode>;
      get(name: "companyname"): Xrm.Attribute<string>;
      get(name: "customer"): Xrm.LookupAttribute<"account" | "contact" | "lead">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailaddress"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "partner"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "prioritycode"): Xrm.OptionSetAttribute<campaignresponse_prioritycode>;
      get(name: "promotioncodename"): Xrm.Attribute<string>;
      get(name: "receivedon"): Xrm.DateAttribute;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"bulkoperation" | "campaign">;
      get(name: "responsecode"): Xrm.OptionSetAttribute<campaignresponse_responsecode>;
      get(name: "scheduledend"): Xrm.DateAttribute;
      get(name: "statecode"): Xrm.OptionSetAttribute<campaignresponse_statecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "telephone"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "channeltypecode"): Xrm.OptionSetControl<campaignresponse_channeltypecode>;
      get(name: "companyname"): Xrm.StringControl;
      get(name: "customer"): Xrm.LookupControl<"account" | "contact" | "lead">;
      get(name: "description"): Xrm.StringControl;
      get(name: "emailaddress"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
      get(name: "header_responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
      get(name: "header_statecode"): Xrm.OptionSetControl<campaignresponse_statecode>;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "partner"): Xrm.LookupControl<"account" | "contact">;
      get(name: "prioritycode"): Xrm.OptionSetControl<campaignresponse_prioritycode>;
      get(name: "promotioncodename"): Xrm.StringControl;
      get(name: "receivedon"): Xrm.DateControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
      get(name: "responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
      get(name: "scheduledend"): Xrm.DateControl;
      get(name: "subject"): Xrm.StringControl;
      get(name: "telephone"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "campaign response"): Xrm.PageTab<Tabs.campaignresponse>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CampaignResponse extends Xrm.PageBase<CampaignResponse.Attributes,CampaignResponse.Tabs,CampaignResponse.Controls> {
    getAttribute(attributeName: "channeltypecode"): Xrm.OptionSetAttribute<campaignresponse_channeltypecode>;
    getAttribute(attributeName: "companyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customer"): Xrm.LookupAttribute<"account" | "contact" | "lead">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "partner"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "prioritycode"): Xrm.OptionSetAttribute<campaignresponse_prioritycode>;
    getAttribute(attributeName: "promotioncodename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "receivedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"bulkoperation" | "campaign">;
    getAttribute(attributeName: "responsecode"): Xrm.OptionSetAttribute<campaignresponse_responsecode>;
    getAttribute(attributeName: "scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<campaignresponse_statecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "channeltypecode"): Xrm.OptionSetControl<campaignresponse_channeltypecode>;
    getControl(controlName: "companyname"): Xrm.StringControl;
    getControl(controlName: "customer"): Xrm.LookupControl<"account" | "contact" | "lead">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailaddress"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
    getControl(controlName: "header_responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<campaignresponse_statecode>;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "partner"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "prioritycode"): Xrm.OptionSetControl<campaignresponse_prioritycode>;
    getControl(controlName: "promotioncodename"): Xrm.StringControl;
    getControl(controlName: "receivedon"): Xrm.DateControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
    getControl(controlName: "responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
    getControl(controlName: "scheduledend"): Xrm.DateControl;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "telephone"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
