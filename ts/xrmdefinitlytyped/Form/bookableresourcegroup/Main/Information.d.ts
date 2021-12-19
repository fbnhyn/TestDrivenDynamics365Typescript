declare namespace Form.bookableresourcegroup.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "childresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "fromdate"): Xrm.DateAttribute;
      get(name: "msdyn_crewmembertype"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "todate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "childresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "fromdate"): Xrm.DateControl;
      get(name: "msdyn_crewmembertype"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "parentresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "todate"): Xrm.DateControl;
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
    getAttribute(attributeName: "childresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "fromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_crewmembertype"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "todate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "childresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "fromdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_crewmembertype"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "parentresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "todate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
