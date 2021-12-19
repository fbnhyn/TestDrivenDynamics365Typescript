declare namespace Form.msdyn_iotpropertydefinition.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "ChildParameters"): Xrm.PageSection;
        get(name: "Commands"): Xrm.PageSection;
        get(name: "General"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_additionalproperties"): Xrm.Attribute<string>;
      get(name: "msdyn_editable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentproperty"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_iotpropertydefinition_msdyn_type>;
      get(name: "msdyn_unit"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_visible"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ChildParameters"): Xrm.SubGridControl<"msdyn_iotpropertydefinition">;
      get(name: "IoTDeviceCommandDefinitions"): Xrm.SubGridControl<"msdyn_iotdevicecommanddefinition">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_additionalproperties"): Xrm.StringControl;
      get(name: "msdyn_additionalproperties1"): Xrm.StringControl;
      get(name: "msdyn_editable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_parentproperty"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_iotpropertydefinition_msdyn_type>;
      get(name: "msdyn_unit"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_visible"): Xrm.OptionSetControl<boolean>;
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
    getAttribute(attributeName: "msdyn_additionalproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_editable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentproperty"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_iotpropertydefinition_msdyn_type>;
    getAttribute(attributeName: "msdyn_unit"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_visible"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ChildParameters"): Xrm.SubGridControl<"msdyn_iotpropertydefinition">;
    getControl(controlName: "IoTDeviceCommandDefinitions"): Xrm.SubGridControl<"msdyn_iotdevicecommanddefinition">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_additionalproperties"): Xrm.StringControl;
    getControl(controlName: "msdyn_additionalproperties1"): Xrm.StringControl;
    getControl(controlName: "msdyn_editable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentproperty"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_iotpropertydefinition_msdyn_type>;
    getControl(controlName: "msdyn_unit"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_visible"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
