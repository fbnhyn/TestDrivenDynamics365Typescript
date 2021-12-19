declare namespace Form.msdyn_clientextension.Main {
  namespace Information1 {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_extensiontype"): Xrm.OptionSetAttribute<msdyn_clientextension_msdyn_extensiontype>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_rank"): Xrm.NumberAttribute;
      get(name: "msdyn_scheduleboardsettingid"): Xrm.LookupAttribute<"msdyn_scheduleboardsetting">;
      get(name: "msdyn_webresource"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_extensiontype"): Xrm.OptionSetControl<msdyn_clientextension_msdyn_extensiontype>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_rank"): Xrm.NumberControl;
      get(name: "msdyn_scheduleboardsettingid"): Xrm.LookupControl<"msdyn_scheduleboardsetting">;
      get(name: "msdyn_webresource"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "webresource_lookup"): Xrm.BaseControl;
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
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyn_extensiontype"): Xrm.OptionSetAttribute<msdyn_clientextension_msdyn_extensiontype>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_rank"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_scheduleboardsettingid"): Xrm.LookupAttribute<"msdyn_scheduleboardsetting">;
    getAttribute(attributeName: "msdyn_webresource"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_extensiontype"): Xrm.OptionSetControl<msdyn_clientextension_msdyn_extensiontype>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_rank"): Xrm.NumberControl;
    getControl(controlName: "msdyn_scheduleboardsettingid"): Xrm.LookupControl<"msdyn_scheduleboardsetting">;
    getControl(controlName: "msdyn_webresource"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "webresource_lookup"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
