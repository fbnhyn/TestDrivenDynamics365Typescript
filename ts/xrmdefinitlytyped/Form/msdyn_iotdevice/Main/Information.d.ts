declare namespace Form.msdyn_iotdevice.Main {
  namespace Information {
    namespace Tabs {
      interface AlertsTab extends Xrm.SectionCollectionBase {
        get(name: "AlertsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface CommandsTab extends Xrm.SectionCollectionBase {
        get(name: "CommandsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DeviceData extends Xrm.SectionCollectionBase {
        get(name: "Device Data"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DeviceInsightsTab extends Xrm.SectionCollectionBase {
        get(name: "DeviceInsightsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface RegistrationHistory extends Xrm.SectionCollectionBase {
        get(name: "RegistrationHistorySection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _1bcff70d56154084953f2196583d6e79 extends Xrm.SectionCollectionBase {
        get(name: "Connected Device Readings"): Xrm.PageSection;
        get(name: "Device Summary Visualization"): Xrm.PageSection;
        get(name: "DeviceSettingsSection"): Xrm.PageSection;
        get(name: "DeviceStatusSection"): Xrm.PageSection;
        get(name: "{a9378ebb-2fcc-41b7-8039-b2b2a89490e2}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_account"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_category"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
      get(name: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_deviceid"): Xrm.Attribute<string>;
      get(name: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
      get(name: "msdyn_devicesettings"): Xrm.Attribute<string>;
      get(name: "msdyn_iotproviderinstance"): Xrm.LookupAttribute<"msdyn_iotproviderinstance">;
      get(name: "msdyn_issimulated"): Xrm.OptionSetAttribute<msdyn_iotdevice_msdyn_issimulated>;
      get(name: "msdyn_lastactivitytime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_registrationmessage"): Xrm.Attribute<string>;
      get(name: "msdyn_registrationstatus"): Xrm.OptionSetAttribute<msdyn_iotdevice_msdyn_registrationstatus>;
      get(name: "msdyn_tags"): Xrm.Attribute<string>;
      get(name: "msdyn_timezone"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AlertsGrid"): Xrm.SubGridControl<"msdyn_iotalert">;
      get(name: "CommandsGrid"): Xrm.SubGridControl<"msdyn_iotdevicecommand">;
      get(name: "DeviceDataHistory"): Xrm.SubGridControl<"msdyn_iotdevicedatahistory">;
      get(name: "RegistrationHistory"): Xrm.SubGridControl<"msdyn_iotdeviceregistrationhistory">;
      get(name: "WebResource_PowerBIDevice"): Xrm.WebResourceControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_account"): Xrm.LookupControl<"account">;
      get(name: "msdyn_category"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
      get(name: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_deviceid"): Xrm.StringControl;
      get(name: "msdyn_deviceid1"): Xrm.StringControl;
      get(name: "msdyn_deviceid2"): Xrm.StringControl;
      get(name: "msdyn_devicereportedproperties"): Xrm.StringControl;
      get(name: "msdyn_devicereportedproperties1"): Xrm.StringControl;
      get(name: "msdyn_devicesettings"): Xrm.StringControl;
      get(name: "msdyn_devicesettings1"): Xrm.StringControl;
      get(name: "msdyn_iotproviderinstance"): Xrm.LookupControl<"msdyn_iotproviderinstance">;
      get(name: "msdyn_issimulated"): Xrm.OptionSetControl<msdyn_iotdevice_msdyn_issimulated>;
      get(name: "msdyn_lastactivitytime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_registrationmessage"): Xrm.StringControl;
      get(name: "msdyn_registrationstatus"): Xrm.OptionSetControl<msdyn_iotdevice_msdyn_registrationstatus>;
      get(name: "msdyn_tags"): Xrm.StringControl;
      get(name: "msdyn_tags1"): Xrm.StringControl;
      get(name: "msdyn_timezone"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AlertsTab"): Xrm.PageTab<Tabs.AlertsTab>;
      get(name: "CommandsTab"): Xrm.PageTab<Tabs.CommandsTab>;
      get(name: "Device Data"): Xrm.PageTab<Tabs.DeviceData>;
      get(name: "DeviceInsightsTab"): Xrm.PageTab<Tabs.DeviceInsightsTab>;
      get(name: "RegistrationHistory"): Xrm.PageTab<Tabs.RegistrationHistory>;
      get(name: "{1bcff70d-5615-4084-953f-2196583d6e79}"): Xrm.PageTab<Tabs._1bcff70d56154084953f2196583d6e79>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_account"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_category"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
    getAttribute(attributeName: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_deviceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_devicesettings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_iotproviderinstance"): Xrm.LookupAttribute<"msdyn_iotproviderinstance">;
    getAttribute(attributeName: "msdyn_issimulated"): Xrm.OptionSetAttribute<msdyn_iotdevice_msdyn_issimulated>;
    getAttribute(attributeName: "msdyn_lastactivitytime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_registrationmessage"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_registrationstatus"): Xrm.OptionSetAttribute<msdyn_iotdevice_msdyn_registrationstatus>;
    getAttribute(attributeName: "msdyn_tags"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_timezone"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AlertsGrid"): Xrm.SubGridControl<"msdyn_iotalert">;
    getControl(controlName: "CommandsGrid"): Xrm.SubGridControl<"msdyn_iotdevicecommand">;
    getControl(controlName: "DeviceDataHistory"): Xrm.SubGridControl<"msdyn_iotdevicedatahistory">;
    getControl(controlName: "RegistrationHistory"): Xrm.SubGridControl<"msdyn_iotdeviceregistrationhistory">;
    getControl(controlName: "WebResource_PowerBIDevice"): Xrm.WebResourceControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_account"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_category"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
    getControl(controlName: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_deviceid"): Xrm.StringControl;
    getControl(controlName: "msdyn_deviceid1"): Xrm.StringControl;
    getControl(controlName: "msdyn_deviceid2"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicereportedproperties"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicereportedproperties1"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicesettings"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicesettings1"): Xrm.StringControl;
    getControl(controlName: "msdyn_iotproviderinstance"): Xrm.LookupControl<"msdyn_iotproviderinstance">;
    getControl(controlName: "msdyn_issimulated"): Xrm.OptionSetControl<msdyn_iotdevice_msdyn_issimulated>;
    getControl(controlName: "msdyn_lastactivitytime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_registrationmessage"): Xrm.StringControl;
    getControl(controlName: "msdyn_registrationstatus"): Xrm.OptionSetControl<msdyn_iotdevice_msdyn_registrationstatus>;
    getControl(controlName: "msdyn_tags"): Xrm.StringControl;
    getControl(controlName: "msdyn_tags1"): Xrm.StringControl;
    getControl(controlName: "msdyn_timezone"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
