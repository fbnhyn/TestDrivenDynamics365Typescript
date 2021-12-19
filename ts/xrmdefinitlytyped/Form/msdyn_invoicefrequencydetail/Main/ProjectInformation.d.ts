declare namespace Form.msdyn_invoicefrequencydetail.Main {
  namespace ProjectInformation {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_dayofmonth"): Xrm.OptionSetAttribute<msdyn_dayofmonth>;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_occurrenceofweekday"): Xrm.OptionSetAttribute<msdyn_occurrenceofweekday>;
      get(name: "msdyn_weekday"): Xrm.OptionSetAttribute<msdyn_weekday>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_dayofmonth"): Xrm.OptionSetControl<msdyn_dayofmonth>;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_occurrenceofweekday"): Xrm.OptionSetControl<msdyn_occurrenceofweekday>;
      get(name: "msdyn_weekday"): Xrm.OptionSetControl<msdyn_weekday>;
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
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "msdyn_dayofmonth"): Xrm.OptionSetAttribute<msdyn_dayofmonth>;
    getAttribute(attributeName: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_occurrenceofweekday"): Xrm.OptionSetAttribute<msdyn_occurrenceofweekday>;
    getAttribute(attributeName: "msdyn_weekday"): Xrm.OptionSetAttribute<msdyn_weekday>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_dayofmonth"): Xrm.OptionSetControl<msdyn_dayofmonth>;
    getControl(controlName: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_occurrenceofweekday"): Xrm.OptionSetControl<msdyn_occurrenceofweekday>;
    getControl(controlName: "msdyn_weekday"): Xrm.OptionSetControl<msdyn_weekday>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
