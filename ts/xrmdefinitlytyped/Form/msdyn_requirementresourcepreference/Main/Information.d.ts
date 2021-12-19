declare namespace Form.msdyn_requirementresourcepreference.Main {
  namespace Information {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_account"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_cascade"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_expirationdate"): Xrm.DateAttribute;
      get(name: "msdyn_preferencetype"): Xrm.OptionSetAttribute<msdyn_requirementresourcepreference_msdyn_preferencetype>;
      get(name: "msdyn_resourcerequirement"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_account"): Xrm.LookupControl<"account">;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_cascade"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_expirationdate"): Xrm.DateControl;
      get(name: "msdyn_preferencetype"): Xrm.OptionSetControl<msdyn_requirementresourcepreference_msdyn_preferencetype>;
      get(name: "msdyn_resourcerequirement"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_account"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_cascade"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_expirationdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_preferencetype"): Xrm.OptionSetAttribute<msdyn_requirementresourcepreference_msdyn_preferencetype>;
    getAttribute(attributeName: "msdyn_resourcerequirement"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_account"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_cascade"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_expirationdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_preferencetype"): Xrm.OptionSetControl<msdyn_requirementresourcepreference_msdyn_preferencetype>;
    getControl(controlName: "msdyn_resourcerequirement"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
