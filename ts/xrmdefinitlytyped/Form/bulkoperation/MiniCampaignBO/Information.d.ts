declare namespace Form.bulkoperation.MiniCampaignBO {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "failurecount"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<bulkoperation_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<bulkoperation_statuscode>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "successcount"): Xrm.NumberAttribute;
      get(name: "targetmemberscount"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "customerstargeted"): Xrm.NumberControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "failurecount"): Xrm.NumberControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<bulkoperation_statecode>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetControl<bulkoperation_statuscode>;
      get(name: "subject"): Xrm.StringControl;
      get(name: "successcount"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "failurecount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<bulkoperation_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<bulkoperation_statuscode>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "successcount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "targetmemberscount"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "customerstargeted"): Xrm.NumberControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "failurecount"): Xrm.NumberControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<bulkoperation_statecode>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<bulkoperation_statuscode>;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "successcount"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
