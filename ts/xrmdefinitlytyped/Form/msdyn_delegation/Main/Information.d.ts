declare namespace Form.msdyn_delegation.Main {
  namespace Information {
    namespace Tabs {
      interface ac9573f308ac45c89c69d7762df99dd8 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_delegationfrom"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_delegationto"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_enddate"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_startdate"): Xrm.DateAttribute;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_delegation_msdyn_type>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_delegationfrom"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_delegationto"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_enddate"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_startdate"): Xrm.DateControl;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_delegation_msdyn_type>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{ac9573f3-08ac-45c8-9c69-d7762df99dd8}"): Xrm.PageTab<Tabs.ac9573f308ac45c89c69d7762df99dd8>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_delegationfrom"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_delegationto"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_enddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_delegation_msdyn_type>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_delegationfrom"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_delegationto"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_enddate"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_startdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_delegation_msdyn_type>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
