declare namespace Form.campaignresponse.QuickCreate {
  namespace CampaignResponse {
    namespace Tabs {
      interface newcampaignresponse extends Xrm.SectionCollectionBase {
        get(name: "description"): Xrm.PageSection;
        get(name: "details"): Xrm.PageSection;
        get(name: "summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "customer"): Xrm.LookupAttribute<"account" | "contact" | "lead">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"bulkoperation" | "campaign">;
      get(name: "responsecode"): Xrm.OptionSetAttribute<campaignresponse_responsecode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "customer"): Xrm.LookupControl<"account" | "contact" | "lead">;
      get(name: "description"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
      get(name: "responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "new campaign response"): Xrm.PageTab<Tabs.newcampaignresponse>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CampaignResponse extends Xrm.PageBase<CampaignResponse.Attributes,CampaignResponse.Tabs,CampaignResponse.Controls> {
    getAttribute(attributeName: "customer"): Xrm.LookupAttribute<"account" | "contact" | "lead">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"bulkoperation" | "campaign">;
    getAttribute(attributeName: "responsecode"): Xrm.OptionSetAttribute<campaignresponse_responsecode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "customer"): Xrm.LookupControl<"account" | "contact" | "lead">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"bulkoperation" | "campaign">;
    getControl(controlName: "responsecode"): Xrm.OptionSetControl<campaignresponse_responsecode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
