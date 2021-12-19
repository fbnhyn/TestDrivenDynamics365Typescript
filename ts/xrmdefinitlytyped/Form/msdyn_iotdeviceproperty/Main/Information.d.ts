declare namespace Form.msdyn_iotdeviceproperty.Main {
  namespace Information {
    namespace Tabs {
      interface _8a17d0c479fc45e08ea090216679a8a0 extends Xrm.SectionCollectionBase {
        get(name: "{8a17d0c4-79fc-45e0-8ea0-90216679a8a0}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_devicecategory"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
      get(name: "msdyn_istag"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_property"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_devicecategory"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
      get(name: "msdyn_istag"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_property"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{8a17d0c4-79fc-45e0-8ea0-90216679a8a0}"): Xrm.PageTab<Tabs._8a17d0c479fc45e08ea090216679a8a0>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_devicecategory"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
    getAttribute(attributeName: "msdyn_istag"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_property"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_devicecategory"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
    getControl(controlName: "msdyn_istag"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_property"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
