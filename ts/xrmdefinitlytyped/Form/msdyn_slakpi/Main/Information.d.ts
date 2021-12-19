declare namespace Form.msdyn_slakpi.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "PauseConfiguration"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_applicablefromfield"): Xrm.Attribute<string>;
      get(name: "msdyn_entityname"): Xrm.Attribute<string>;
      get(name: "msdyn_kpifield"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pauseconfigurationxml"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_preview"): Xrm.WebResourceControl;
      get(name: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_applicablefromfield"): Xrm.StringControl;
      get(name: "msdyn_entityname"): Xrm.StringControl;
      get(name: "msdyn_kpifield"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pauseconfigurationxml"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_applicablefromfield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_entityname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_kpifield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pauseconfigurationxml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_preview"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_applicablefromfield"): Xrm.StringControl;
    getControl(controlName: "msdyn_entityname"): Xrm.StringControl;
    getControl(controlName: "msdyn_kpifield"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pauseconfigurationxml"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
