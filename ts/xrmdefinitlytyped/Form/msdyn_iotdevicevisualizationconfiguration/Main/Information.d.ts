declare namespace Form.msdyn_iotdevicevisualizationconfiguration.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_actionname"): Xrm.Attribute<string>;
      get(name: "msdyn_aggregation"): Xrm.OptionSetAttribute<msdyn_iotaggregation>;
      get(name: "msdyn_deviceevent"): Xrm.OptionSetAttribute<msdyn_deviceevent>;
      get(name: "msdyn_iotdevice"): Xrm.LookupAttribute<"msdyn_iotdevice">;
      get(name: "msdyn_iotdevicecategory"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
      get(name: "msdyn_measurement"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_position"): Xrm.NumberAttribute;
      get(name: "msdyn_timerangetype"): Xrm.OptionSetAttribute<msdyn_timerangetype>;
      get(name: "msdyn_timerangevalue"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_actionname"): Xrm.StringControl;
      get(name: "msdyn_aggregation"): Xrm.OptionSetControl<msdyn_iotaggregation>;
      get(name: "msdyn_deviceevent"): Xrm.OptionSetControl<msdyn_deviceevent>;
      get(name: "msdyn_iotdevice"): Xrm.LookupControl<"msdyn_iotdevice">;
      get(name: "msdyn_iotdevicecategory"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
      get(name: "msdyn_measurement"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_position"): Xrm.NumberControl;
      get(name: "msdyn_timerangetype"): Xrm.OptionSetControl<msdyn_timerangetype>;
      get(name: "msdyn_timerangevalue"): Xrm.NumberControl;
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
    getAttribute(attributeName: "msdyn_actionname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_aggregation"): Xrm.OptionSetAttribute<msdyn_iotaggregation>;
    getAttribute(attributeName: "msdyn_deviceevent"): Xrm.OptionSetAttribute<msdyn_deviceevent>;
    getAttribute(attributeName: "msdyn_iotdevice"): Xrm.LookupAttribute<"msdyn_iotdevice">;
    getAttribute(attributeName: "msdyn_iotdevicecategory"): Xrm.LookupAttribute<"msdyn_iotdevicecategory">;
    getAttribute(attributeName: "msdyn_measurement"): Xrm.LookupAttribute<"msdyn_iotpropertydefinition">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_position"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_timerangetype"): Xrm.OptionSetAttribute<msdyn_timerangetype>;
    getAttribute(attributeName: "msdyn_timerangevalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_actionname"): Xrm.StringControl;
    getControl(controlName: "msdyn_aggregation"): Xrm.OptionSetControl<msdyn_iotaggregation>;
    getControl(controlName: "msdyn_deviceevent"): Xrm.OptionSetControl<msdyn_deviceevent>;
    getControl(controlName: "msdyn_iotdevice"): Xrm.LookupControl<"msdyn_iotdevice">;
    getControl(controlName: "msdyn_iotdevicecategory"): Xrm.LookupControl<"msdyn_iotdevicecategory">;
    getControl(controlName: "msdyn_measurement"): Xrm.LookupControl<"msdyn_iotpropertydefinition">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_position"): Xrm.NumberControl;
    getControl(controlName: "msdyn_timerangetype"): Xrm.OptionSetControl<msdyn_timerangetype>;
    getControl(controlName: "msdyn_timerangevalue"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
