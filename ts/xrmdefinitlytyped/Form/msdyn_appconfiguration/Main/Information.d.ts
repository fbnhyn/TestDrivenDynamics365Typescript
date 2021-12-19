declare namespace Form.msdyn_appconfiguration.Main {
  namespace Information {
    namespace Tabs {
      interface _28cb2dae503940b7866860cfd3ae02c5 extends Xrm.SectionCollectionBase {
        get(name: "{28cb2dae-5039-40b7-8668-60cfd3ae02c5}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_appmoduleuniquename"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ApplicationExtensions"): Xrm.SubGridControl<"msdyn_applicationextension">;
      get(name: "SessionTemplates"): Xrm.SubGridControl<"msdyn_sessiontemplate">;
      get(name: "ismanaged"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_appmoduleuniquename"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{28cb2dae-5039-40b7-8668-60cfd3ae02c5}"): Xrm.PageTab<Tabs._28cb2dae503940b7866860cfd3ae02c5>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ismanaged"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_appmoduleuniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ApplicationExtensions"): Xrm.SubGridControl<"msdyn_applicationextension">;
    getControl(controlName: "SessionTemplates"): Xrm.SubGridControl<"msdyn_sessiontemplate">;
    getControl(controlName: "ismanaged"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_appmoduleuniquename"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
