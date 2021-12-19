declare namespace Form.msdyn_operatinghour.Main {
  namespace Information {
    namespace Tabs {
      interface WorkingHoursTab extends Xrm.SectionCollectionBase {
        get(name: "WorkingHours_CalendarSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_calendarid"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_enablealldays"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_endtimestring"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_oc_daysofweek"): Xrm.MultiSelectOptionSetAttribute<msdyn_oc_daysofweek>;
      get(name: "msdyn_starttimestring"): Xrm.Attribute<string>;
      get(name: "msdyn_timezone"): Xrm.NumberAttribute;
      get(name: "msdyn_totalworkhours"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_calendarid"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_description1"): Xrm.StringControl;
      get(name: "msdyn_enablealldays"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_endtimestring"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_name1"): Xrm.StringControl;
      get(name: "msdyn_oc_daysofweek"): Xrm.MultiSelectOptionSetControl<msdyn_oc_daysofweek>;
      get(name: "msdyn_starttimestring"): Xrm.StringControl;
      get(name: "msdyn_timezone"): Xrm.Control<Xrm.NumberAttribute>;
      get(name: "msdyn_totalworkhours"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "ownerid1"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "WorkingHoursTab"): Xrm.PageTab<Tabs.WorkingHoursTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_calendarid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enablealldays"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_endtimestring"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_oc_daysofweek"): Xrm.MultiSelectOptionSetAttribute<msdyn_oc_daysofweek>;
    getAttribute(attributeName: "msdyn_starttimestring"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_timezone"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalworkhours"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_calendarid"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_description1"): Xrm.StringControl;
    getControl(controlName: "msdyn_enablealldays"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_endtimestring"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_name1"): Xrm.StringControl;
    getControl(controlName: "msdyn_oc_daysofweek"): Xrm.MultiSelectOptionSetControl<msdyn_oc_daysofweek>;
    getControl(controlName: "msdyn_starttimestring"): Xrm.StringControl;
    getControl(controlName: "msdyn_timezone"): Xrm.Control<Xrm.NumberAttribute>;
    getControl(controlName: "msdyn_totalworkhours"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "ownerid1"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
