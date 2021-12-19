declare namespace Form.msdyn_iotproviderinstance.Main {
  namespace Information {
    namespace Tabs {
      interface DevicesTab extends Xrm.SectionCollectionBase {
        get(name: "DevicesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface General extends Xrm.SectionCollectionBase {
        get(name: "section_2"): Xrm.PageSection;
        get(name: "{8d4fb144-c2c7-46bb-a136-4d4234b14b86}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_iotprovider"): Xrm.LookupAttribute<"msdyn_iotprovider">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_providerinstanceid"): Xrm.Attribute<string>;
      get(name: "msdyn_url"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IoTProviderInstanceDevices"): Xrm.SubGridControl<"msdyn_iotdevice">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_iotprovider"): Xrm.LookupControl<"msdyn_iotprovider">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_providerinstanceid"): Xrm.StringControl;
      get(name: "msdyn_url"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "DevicesTab"): Xrm.PageTab<Tabs.DevicesTab>;
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_iotprovider"): Xrm.LookupAttribute<"msdyn_iotprovider">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_providerinstanceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_url"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IoTProviderInstanceDevices"): Xrm.SubGridControl<"msdyn_iotdevice">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_iotprovider"): Xrm.LookupControl<"msdyn_iotprovider">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_providerinstanceid"): Xrm.StringControl;
    getControl(controlName: "msdyn_url"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
