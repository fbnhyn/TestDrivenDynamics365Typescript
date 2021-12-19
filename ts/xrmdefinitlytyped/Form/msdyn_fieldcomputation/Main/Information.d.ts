declare namespace Form.msdyn_fieldcomputation.Main {
  namespace Information {
    namespace Tabs {
      interface b74a34505dc5412aa7ca2847a660f299 extends Xrm.SectionCollectionBase {
        get(name: "{7b7b4cf3-6d9f-4da9-8e24-a71b75677633}"): Xrm.PageSection;
        get(name: "{b74a3450-5dc5-412a-a7ca-2847a660f299}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_computedfield"): Xrm.OptionSetAttribute<msdyn_computablefields>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_productid"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_propertyid"): Xrm.LookupAttribute<"dynamicproperty">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_computedfield"): Xrm.OptionSetControl<msdyn_computablefields>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_productid"): Xrm.LookupControl<"product">;
      get(name: "msdyn_propertyid"): Xrm.LookupControl<"dynamicproperty">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{b74a3450-5dc5-412a-a7ca-2847a660f299}"): Xrm.PageTab<Tabs.b74a34505dc5412aa7ca2847a660f299>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_computedfield"): Xrm.OptionSetAttribute<msdyn_computablefields>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_propertyid"): Xrm.LookupAttribute<"dynamicproperty">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_computedfield"): Xrm.OptionSetControl<msdyn_computablefields>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_propertyid"): Xrm.LookupControl<"dynamicproperty">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
