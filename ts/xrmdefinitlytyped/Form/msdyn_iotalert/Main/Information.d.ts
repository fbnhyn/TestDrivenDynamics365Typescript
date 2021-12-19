declare namespace Form.msdyn_iotalert.Main {
  namespace Information {
    namespace Tabs {
      interface AssetDetailsTab extends Xrm.SectionCollectionBase {
        get(name: "AssetWorkOrdersSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface DeviceCommandsTab extends Xrm.SectionCollectionBase {
        get(name: "DeviceCommandsSection"): Xrm.PageSection;
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
      interface b4d9bb281bd14896aa83a8cd2a781dde extends Xrm.SectionCollectionBase {
        get(name: "AlertDataSection"): Xrm.PageSection;
        get(name: "AssetSection"): Xrm.PageSection;
        get(name: "Connected Device Readings"): Xrm.PageSection;
        get(name: "Device Summary Visualization"): Xrm.PageSection;
        get(name: "HierarchySection"): Xrm.PageSection;
        get(name: "SuggestionsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_alertdata"): Xrm.Attribute<string>;
      get(name: "msdyn_alertpriorityscore"): Xrm.NumberAttribute;
      get(name: "msdyn_alerttime"): Xrm.DateAttribute;
      get(name: "msdyn_alerttoken"): Xrm.Attribute<string>;
      get(name: "msdyn_alerttype"): Xrm.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
      get(name: "msdyn_alerturl"): Xrm.Attribute<string>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
      get(name: "msdyn_deviceid"): Xrm.Attribute<string>;
      get(name: "msdyn_parentalert"): Xrm.LookupAttribute<"msdyn_iotalert">;
      get(name: "msdyn_parentalerttoken"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestedincidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
      get(name: "msdyn_suggestedpriority"): Xrm.OptionSetAttribute<msdyn_suggestedpriority>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_iotalert_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DeviceCommandsGrid"): Xrm.SubGridControl<"msdyn_iotdevicecommand">;
      get(name: "WebResource_PowerBIAlert"): Xrm.WebResourceControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_msdyn_alerttime"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_alerttime_1"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset"> | null;
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_description_1"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice"> | null;
      get(name: "msdyn_alertdata"): Xrm.StringControl;
      get(name: "msdyn_alertdata1"): Xrm.StringControl;
      get(name: "msdyn_alertpriorityscore"): Xrm.NumberControl;
      get(name: "msdyn_alerttime"): Xrm.DateControl;
      get(name: "msdyn_alerttoken"): Xrm.StringControl;
      get(name: "msdyn_alerttype"): Xrm.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
      get(name: "msdyn_alerturl"): Xrm.StringControl;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_device1"): Xrm.StringControl;
      get(name: "msdyn_device2"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_deviceid"): Xrm.StringControl;
      get(name: "msdyn_parentalert"): Xrm.LookupControl<"msdyn_iotalert">;
      get(name: "msdyn_parentalerttoken"): Xrm.StringControl;
      get(name: "msdyn_suggestedincidenttype"): Xrm.LookupControl<"msdyn_incidenttype">;
      get(name: "msdyn_suggestedpriority"): Xrm.OptionSetControl<msdyn_suggestedpriority>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "statuscode"): Xrm.OptionSetControl<msdyn_iotalert_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AssetDetailsTab"): Xrm.PageTab<Tabs.AssetDetailsTab>;
      get(name: "DeviceCommandsTab"): Xrm.PageTab<Tabs.DeviceCommandsTab>;
      get(name: "DeviceInsightsTab"): Xrm.PageTab<Tabs.DeviceInsightsTab>;
      get(name: "{b4d9bb28-1bd1-4896-aa83-a8cd2a781dde}"): Xrm.PageTab<Tabs.b4d9bb281bd14896aa83a8cd2a781dde>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_alertdata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_alertpriorityscore"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_alerttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_alerttoken"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_alerttype"): Xrm.OptionSetAttribute<msdyn_iotalert_msdyn_alerttype>;
    getAttribute(attributeName: "msdyn_alerturl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
    getAttribute(attributeName: "msdyn_deviceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentalert"): Xrm.LookupAttribute<"msdyn_iotalert">;
    getAttribute(attributeName: "msdyn_parentalerttoken"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestedincidenttype"): Xrm.LookupAttribute<"msdyn_incidenttype">;
    getAttribute(attributeName: "msdyn_suggestedpriority"): Xrm.OptionSetAttribute<msdyn_suggestedpriority>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_iotalert_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DeviceCommandsGrid"): Xrm.SubGridControl<"msdyn_iotdevicecommand">;
    getControl(controlName: "WebResource_PowerBIAlert"): Xrm.WebResourceControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_msdyn_alerttime"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_alerttime_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset"> | null;
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_description_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice"> | null;
    getControl(controlName: "msdyn_alertdata"): Xrm.StringControl;
    getControl(controlName: "msdyn_alertdata1"): Xrm.StringControl;
    getControl(controlName: "msdyn_alertpriorityscore"): Xrm.NumberControl;
    getControl(controlName: "msdyn_alerttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_alerttoken"): Xrm.StringControl;
    getControl(controlName: "msdyn_alerttype"): Xrm.OptionSetControl<msdyn_iotalert_msdyn_alerttype>;
    getControl(controlName: "msdyn_alerturl"): Xrm.StringControl;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_device1"): Xrm.StringControl;
    getControl(controlName: "msdyn_device2"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_deviceid"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentalert"): Xrm.LookupControl<"msdyn_iotalert">;
    getControl(controlName: "msdyn_parentalerttoken"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestedincidenttype"): Xrm.LookupControl<"msdyn_incidenttype">;
    getControl(controlName: "msdyn_suggestedpriority"): Xrm.OptionSetControl<msdyn_suggestedpriority>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msdyn_iotalert_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
