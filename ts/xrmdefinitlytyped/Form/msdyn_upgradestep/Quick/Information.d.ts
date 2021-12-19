declare namespace Form.msdyn_upgradestep.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_details"): Xrm.Attribute<string>;
      get(name: "msdyn_errors"): Xrm.Attribute<string>;
      get(name: "msdyn_finished"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_upgradestatus>;
      get(name: "msdyn_stepid"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msdyn_details"): Xrm.StringControl;
      get(name: "msdyn_errors"): Xrm.StringControl;
      get(name: "msdyn_finished"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_status"): Xrm.OptionSetControl<msdyn_upgradestatus>;
      get(name: "msdyn_stepid"): Xrm.StringControl;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_details"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_errors"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_finished"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_upgradestatus>;
    getAttribute(attributeName: "msdyn_stepid"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msdyn_details"): Xrm.StringControl;
    getControl(controlName: "msdyn_errors"): Xrm.StringControl;
    getControl(controlName: "msdyn_finished"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_status"): Xrm.OptionSetControl<msdyn_upgradestatus>;
    getControl(controlName: "msdyn_stepid"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
