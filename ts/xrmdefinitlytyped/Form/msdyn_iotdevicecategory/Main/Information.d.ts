declare namespace Form.msdyn_iotdevicecategory.Main {
  namespace Information {
    namespace Tabs {
      interface CommandDefinitions extends Xrm.SectionCollectionBase {
        get(name: "Command Definitions_section_2"): Xrm.PageSection;
        get(name: "Commands Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DeviceTagsTab extends Xrm.SectionCollectionBase {
        get(name: "DeviceTagsSection"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface PropertiesTab extends Xrm.SectionCollectionBase {
        get(name: "PropertiesSection"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Commands"): Xrm.SubGridControl<"msdyn_iotdevicecommanddefinition">;
      get(name: "DevicePropertiesGrid"): Xrm.SubGridControl<"msdyn_iotdeviceproperty">;
      get(name: "DeviceTagsGrid"): Xrm.SubGridControl<"msdyn_iotdeviceproperty">;
      get(name: "DevicesGrid"): Xrm.SubGridControl<"msdyn_iotdevice">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Command Definitions"): Xrm.PageTab<Tabs.CommandDefinitions>;
      get(name: "DeviceTagsTab"): Xrm.PageTab<Tabs.DeviceTagsTab>;
      get(name: "PropertiesTab"): Xrm.PageTab<Tabs.PropertiesTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Commands"): Xrm.SubGridControl<"msdyn_iotdevicecommanddefinition">;
    getControl(controlName: "DevicePropertiesGrid"): Xrm.SubGridControl<"msdyn_iotdeviceproperty">;
    getControl(controlName: "DeviceTagsGrid"): Xrm.SubGridControl<"msdyn_iotdeviceproperty">;
    getControl(controlName: "DevicesGrid"): Xrm.SubGridControl<"msdyn_iotdevice">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
