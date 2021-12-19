declare namespace Form.slakpiinstance.Main {
  namespace SLAKPIInstance {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "failuretime"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "regarding"): Xrm.LookupAttribute<"incident">;
      get(name: "status"): Xrm.OptionSetAttribute<slakpiinstance_status>;
      get(name: "succeededon"): Xrm.DateAttribute;
      get(name: "warningtime"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "failuretime"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser">;
      get(name: "header_status"): Xrm.OptionSetControl<slakpiinstance_status>;
      get(name: "name"): Xrm.StringControl;
      get(name: "regarding"): Xrm.LookupControl<"incident">;
      get(name: "succeededon"): Xrm.DateControl;
      get(name: "warningtime"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface SLAKPIInstance extends Xrm.PageBase<SLAKPIInstance.Attributes,SLAKPIInstance.Tabs,SLAKPIInstance.Controls> {
    getAttribute(attributeName: "failuretime"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "regarding"): Xrm.LookupAttribute<"incident">;
    getAttribute(attributeName: "status"): Xrm.OptionSetAttribute<slakpiinstance_status>;
    getAttribute(attributeName: "succeededon"): Xrm.DateAttribute;
    getAttribute(attributeName: "warningtime"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "failuretime"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "header_status"): Xrm.OptionSetControl<slakpiinstance_status>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "regarding"): Xrm.LookupControl<"incident">;
    getControl(controlName: "succeededon"): Xrm.DateControl;
    getControl(controlName: "warningtime"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
