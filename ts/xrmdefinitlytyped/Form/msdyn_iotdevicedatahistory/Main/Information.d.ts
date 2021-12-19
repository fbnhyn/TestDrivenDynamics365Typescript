declare namespace Form.msdyn_iotdevicedatahistory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_connectionstateupdatedtime"): Xrm.DateAttribute;
      get(name: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
      get(name: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
      get(name: "msdyn_lastactivitytime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_status"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_statusreason"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_connectionstateupdatedtime"): Xrm.DateControl;
      get(name: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_devicereportedproperties"): Xrm.StringControl;
      get(name: "msdyn_devicereportedproperties1"): Xrm.StringControl;
      get(name: "msdyn_lastactivitytime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_status"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_statusreason"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_connectionstate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_connectionstateupdatedtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_device"): Xrm.LookupAttribute<"msdyn_iotdevice">;
    getAttribute(attributeName: "msdyn_devicereportedproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_lastactivitytime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_status"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_statusreason"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_connectionstate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_connectionstateupdatedtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_device"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_devicereportedproperties"): Xrm.StringControl;
    getControl(controlName: "msdyn_devicereportedproperties1"): Xrm.StringControl;
    getControl(controlName: "msdyn_lastactivitytime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_status"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_statusreason"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
