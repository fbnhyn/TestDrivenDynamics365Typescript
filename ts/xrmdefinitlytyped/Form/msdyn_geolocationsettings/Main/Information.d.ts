declare namespace Form.msdyn_geolocationsettings.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_enablelocationtracking"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_fridayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_fridaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_mondayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_mondaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_refreshintervalseconds"): Xrm.NumberAttribute;
      get(name: "msdyn_saturdayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_saturdaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_sundayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_sundaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_thursdayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_thursdaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_tuesdayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_tuesdaystarttime"): Xrm.DateAttribute;
      get(name: "msdyn_wednesdayendtime"): Xrm.DateAttribute;
      get(name: "msdyn_wednesdaystarttime"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_enablelocationtracking"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_fridayendtime"): Xrm.DateControl;
      get(name: "msdyn_fridaystarttime"): Xrm.DateControl;
      get(name: "msdyn_mondayendtime"): Xrm.DateControl;
      get(name: "msdyn_mondaystarttime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_refreshintervalseconds"): Xrm.NumberControl;
      get(name: "msdyn_saturdayendtime"): Xrm.DateControl;
      get(name: "msdyn_saturdaystarttime"): Xrm.DateControl;
      get(name: "msdyn_sundayendtime"): Xrm.DateControl;
      get(name: "msdyn_sundaystarttime"): Xrm.DateControl;
      get(name: "msdyn_thursdayendtime"): Xrm.DateControl;
      get(name: "msdyn_thursdaystarttime"): Xrm.DateControl;
      get(name: "msdyn_tuesdayendtime"): Xrm.DateControl;
      get(name: "msdyn_tuesdaystarttime"): Xrm.DateControl;
      get(name: "msdyn_wednesdayendtime"): Xrm.DateControl;
      get(name: "msdyn_wednesdaystarttime"): Xrm.DateControl;
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
    getAttribute(attributeName: "msdyn_enablelocationtracking"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_fridayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_fridaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_mondayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_mondaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_refreshintervalseconds"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_saturdayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_saturdaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_sundayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_sundaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_thursdayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_thursdaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_tuesdayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_tuesdaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_wednesdayendtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_wednesdaystarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_enablelocationtracking"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_fridayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_fridaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_mondayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_mondaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_refreshintervalseconds"): Xrm.NumberControl;
    getControl(controlName: "msdyn_saturdayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_saturdaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_sundayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_sundaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_thursdayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_thursdaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_tuesdayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_tuesdaystarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_wednesdayendtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_wednesdaystarttime"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
