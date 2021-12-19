declare namespace Form.msdyn_iotdevicecommand.Main {
  namespace Information {
    namespace Tabs {
      interface c820dae9b78d4bbd8fbedd255869040b extends Xrm.SectionCollectionBase {
        get(name: "IoTAlert"): Xrm.PageSection;
        get(name: "MessageSection"): Xrm.PageSection;
        get(name: "{5e35860a-0cc6-4e8a-9288-9e77ddb50b1e}"): Xrm.PageSection;
        get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}_section_2"): Xrm.PageSection;
        get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface mfdTab extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_command"): Xrm.LookupAttribute<"msdyn_iotdevicecommanddefinition">;
      get(name: "msdyn_commandstatus"): Xrm.OptionSetAttribute<msdyn_iotdevicecommand_msdyn_commandstatus>;
      get(name: "msdyn_commandstatusreason"): Xrm.Attribute<string>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
      get(name: "msdyn_deviceid"): Xrm.Attribute<string>;
      get(name: "msdyn_message"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentalert"): Xrm.LookupAttribute<"msdyn_iotalert">;
      get(name: "msdyn_sendtoallconnecteddevices"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msdyn_command"): Xrm.LookupControl<"msdyn_iotdevicecommanddefinition">;
      get(name: "msdyn_command1"): Xrm.LookupControl<"msdyn_iotdevicecommanddefinition">;
      get(name: "msdyn_commandstatus"): Xrm.OptionSetControl<msdyn_iotdevicecommand_msdyn_commandstatus>;
      get(name: "msdyn_commandstatusreason"): Xrm.StringControl;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_customerasset1"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_device1"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_deviceid"): Xrm.StringControl;
      get(name: "msdyn_message"): Xrm.StringControl;
      get(name: "msdyn_message1"): Xrm.StringControl;
      get(name: "msdyn_message2"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_name1"): Xrm.StringControl;
      get(name: "msdyn_parentalert"): Xrm.LookupControl<"msdyn_iotalert">;
      get(name: "msdyn_sendtoallconnecteddevices"): Xrm.OptionSetControl<boolean>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{c820dae9-b78d-4bbd-8fbe-dd255869040b}"): Xrm.PageTab<Tabs.c820dae9b78d4bbd8fbedd255869040b>;
      get(name: "mfdTab"): Xrm.PageTab<Tabs.mfdTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_command"): Xrm.LookupAttribute<"msdyn_iotdevicecommanddefinition">;
    getAttribute(attributeName: "msdyn_commandstatus"): Xrm.OptionSetAttribute<msdyn_iotdevicecommand_msdyn_commandstatus>;
    getAttribute(attributeName: "msdyn_commandstatusreason"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
    getAttribute(attributeName: "msdyn_deviceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_message"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentalert"): Xrm.LookupAttribute<"msdyn_iotalert">;
    getAttribute(attributeName: "msdyn_sendtoallconnecteddevices"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msdyn_command"): Xrm.LookupControl<"msdyn_iotdevicecommanddefinition">;
    getControl(controlName: "msdyn_command1"): Xrm.LookupControl<"msdyn_iotdevicecommanddefinition">;
    getControl(controlName: "msdyn_commandstatus"): Xrm.OptionSetControl<msdyn_iotdevicecommand_msdyn_commandstatus>;
    getControl(controlName: "msdyn_commandstatusreason"): Xrm.StringControl;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_customerasset1"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_device1"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_deviceid"): Xrm.StringControl;
    getControl(controlName: "msdyn_message"): Xrm.StringControl;
    getControl(controlName: "msdyn_message1"): Xrm.StringControl;
    getControl(controlName: "msdyn_message2"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_name1"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentalert"): Xrm.LookupControl<"msdyn_iotalert">;
    getControl(controlName: "msdyn_sendtoallconnecteddevices"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
