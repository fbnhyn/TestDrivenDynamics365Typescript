declare namespace Form.msdyn_propertylog.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_booleanvalue"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_datevalue"): Xrm.DateAttribute;
      get(name: "msdyn_delta"): Xrm.NumberAttribute;
      get(name: "msdyn_islatest"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_numbervalue"): Xrm.NumberAttribute;
      get(name: "msdyn_property"): Xrm.LookupAttribute<"msdyn_property">;
      get(name: "msdyn_readingtime"): Xrm.DateAttribute;
      get(name: "msdyn_stringvalue"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_booleanvalue"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_datevalue"): Xrm.DateControl;
      get(name: "msdyn_delta"): Xrm.NumberControl;
      get(name: "msdyn_islatest"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_numbervalue"): Xrm.NumberControl;
      get(name: "msdyn_property"): Xrm.LookupControl<"msdyn_property">;
      get(name: "msdyn_readingtime"): Xrm.DateControl;
      get(name: "msdyn_stringvalue"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
    getAttribute(attributeName: "msdyn_booleanvalue"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_datevalue"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_delta"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_islatest"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_numbervalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_property"): Xrm.LookupAttribute<"msdyn_property">;
    getAttribute(attributeName: "msdyn_readingtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_stringvalue"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_booleanvalue"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_datevalue"): Xrm.DateControl;
    getControl(controlName: "msdyn_delta"): Xrm.NumberControl;
    getControl(controlName: "msdyn_islatest"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_numbervalue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_property"): Xrm.LookupControl<"msdyn_property">;
    getControl(controlName: "msdyn_readingtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_stringvalue"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
