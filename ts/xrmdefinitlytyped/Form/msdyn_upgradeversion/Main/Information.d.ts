declare namespace Form.msdyn_upgradeversion.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_finished"): Xrm.DateAttribute;
      get(name: "msdyn_startingversion"): Xrm.Attribute<string>;
      get(name: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_upgradestatus>;
      get(name: "msdyn_summary"): Xrm.Attribute<string>;
      get(name: "msdyn_targetversion"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "UpgradeSteps"): Xrm.SubGridControl<"msdyn_upgradestep">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msdyn_finished"): Xrm.DateControl;
      get(name: "msdyn_startingversion"): Xrm.StringControl;
      get(name: "msdyn_status"): Xrm.OptionSetControl<msdyn_upgradestatus>;
      get(name: "msdyn_summary"): Xrm.StringControl;
      get(name: "msdyn_targetversion"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_finished"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_startingversion"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_upgradestatus>;
    getAttribute(attributeName: "msdyn_summary"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_targetversion"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "UpgradeSteps"): Xrm.SubGridControl<"msdyn_upgradestep">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msdyn_finished"): Xrm.DateControl;
    getControl(controlName: "msdyn_startingversion"): Xrm.StringControl;
    getControl(controlName: "msdyn_status"): Xrm.OptionSetControl<msdyn_upgradestatus>;
    getControl(controlName: "msdyn_summary"): Xrm.StringControl;
    getControl(controlName: "msdyn_targetversion"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
