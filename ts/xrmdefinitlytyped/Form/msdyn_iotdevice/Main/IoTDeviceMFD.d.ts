declare namespace Form.msdyn_iotdevice.Main {
  namespace IoTDeviceMFD {
    namespace Tabs {
      interface d56b7a8869814f4b9ae26d1aec457231 extends Xrm.SectionCollectionBase {
        get(name: "Device Data"): Xrm.PageSection;
        get(name: "_column_2_section_1"): Xrm.PageSection;
        get(name: "_column_3_section_1"): Xrm.PageSection;
        get(name: "{804f2d0a-d93d-400b-9a90-b1c0d9992b5f}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
      get(name: "msdyn_devicesettings"): Xrm.Attribute<string>;
      get(name: "msdyn_lastactivitytime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_tags"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DeviceDataHistory"): Xrm.SubGridControl<"msdyn_iotdevicedatahistory">;
      get(name: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_devicereportedproperties"): Xrm.StringControl;
      get(name: "msdyn_devicesettings"): Xrm.StringControl;
      get(name: "msdyn_lastactivitytime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_tags"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{d56b7a88-6981-4f4b-9ae2-6d1aec457231}"): Xrm.PageTab<Tabs.d56b7a8869814f4b9ae26d1aec457231>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface IoTDeviceMFD extends Xrm.PageBase<IoTDeviceMFD.Attributes,IoTDeviceMFD.Tabs,IoTDeviceMFD.Controls> {
    getAttribute(attributeName: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_devicesettings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_lastactivitytime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_tags"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DeviceDataHistory"): Xrm.SubGridControl<"msdyn_iotdevicedatahistory">;
    getControl(controlName: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_devicereportedproperties"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicesettings"): Xrm.StringControl;
    getControl(controlName: "msdyn_lastactivitytime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_tags"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
