declare namespace Form.msdyn_workorderdetailsgenerationqueue.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_exceptionmessage"): Xrm.Attribute<string>;
      get(name: "msdyn_exceptiontrace"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_processed"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_workorderdetails"): Xrm.Attribute<string>;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_workorderdetailsgenerationqueue_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_workorderdetailsgenerationqueue_statecode>;
      get(name: "msdyn_exceptionmessage"): Xrm.StringControl;
      get(name: "msdyn_exceptiontrace"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_processed"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_workorderdetails"): Xrm.StringControl;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_exceptionmessage"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_exceptiontrace"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_processed"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_workorderdetails"): Xrm.Attribute<string>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_workorderdetailsgenerationqueue_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_workorderdetailsgenerationqueue_statecode>;
    getControl(controlName: "msdyn_exceptionmessage"): Xrm.StringControl;
    getControl(controlName: "msdyn_exceptiontrace"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_processed"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_workorderdetails"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
