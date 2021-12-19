declare namespace Form.msdyn_projectteammembersignup.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_membershipstatus"): Xrm.OptionSetAttribute<msdyn_projectteammembersignup_msdyn_membershipstatus>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_msdyn_membershipstatus"): Xrm.OptionSetControl<msdyn_projectteammembersignup_msdyn_membershipstatus>;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
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
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_membershipstatus"): Xrm.OptionSetAttribute<msdyn_projectteammembersignup_msdyn_membershipstatus>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_msdyn_membershipstatus"): Xrm.OptionSetControl<msdyn_projectteammembersignup_msdyn_membershipstatus>;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
