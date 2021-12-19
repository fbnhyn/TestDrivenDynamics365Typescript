declare namespace Form.msdyn_assignmentmap.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_applicableforrouting"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_assignedticks"): Xrm.Attribute<string>;
      get(name: "msdyn_availablecapacity"): Xrm.NumberAttribute;
      get(name: "msdyn_lastassignedentity"): Xrm.DateAttribute;
      get(name: "msdyn_maxcapacity"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_systemuserid"): Xrm.LookupAttribute<"systemuser">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_applicableforrouting"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_assignedticks"): Xrm.StringControl;
      get(name: "msdyn_availablecapacity"): Xrm.NumberControl;
      get(name: "msdyn_lastassignedentity"): Xrm.DateControl;
      get(name: "msdyn_maxcapacity"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_systemuserid"): Xrm.LookupControl<"systemuser">;
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
    getAttribute(attributeName: "msdyn_applicableforrouting"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_assignedticks"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_availablecapacity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_lastassignedentity"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_maxcapacity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_systemuserid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_applicableforrouting"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_assignedticks"): Xrm.StringControl;
    getControl(controlName: "msdyn_availablecapacity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_lastassignedentity"): Xrm.DateControl;
    getControl(controlName: "msdyn_maxcapacity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_systemuserid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
