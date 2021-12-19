declare namespace Form.msdyn_timegroup.Main {
  namespace Information {
    namespace Tabs {
      interface Detailstab extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface eb571bb4b5254254a87c716f6dc00062 extends Xrm.SectionCollectionBase {
        get(name: "{9440eeef-63f6-4682-8b8e-43760f0bbe48}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface interval_tab extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_displaytopxresultsinsatimegroup"): Xrm.NumberAttribute;
      get(name: "msdyn_hidebookingtimeonsa"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_interval"): Xrm.NumberAttribute;
      get(name: "msdyn_intervalsbegin"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_resetpertimegroupdetail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_resultsperinterval"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_msdyn_intervalbegin"): Xrm.WebResourceControl;
      get(name: "detailsgrid"): Xrm.SubGridControl<"msdyn_timegroupdetail">;
      get(name: "msdyn_displaytopxresultsinsatimegroup"): Xrm.NumberControl;
      get(name: "msdyn_hidebookingtimeonsa"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_interval"): Xrm.NumberControl;
      get(name: "msdyn_intervalsbegin"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_resetpertimegroupdetail"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_resultsperinterval"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Detailstab"): Xrm.PageTab<Tabs.Detailstab>;
      get(name: "{eb571bb4-b525-4254-a87c-716f6dc00062}"): Xrm.PageTab<Tabs.eb571bb4b5254254a87c716f6dc00062>;
      get(name: "interval_tab"): Xrm.PageTab<Tabs.interval_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_displaytopxresultsinsatimegroup"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_hidebookingtimeonsa"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_interval"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_intervalsbegin"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_resetpertimegroupdetail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_resultsperinterval"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_msdyn_intervalbegin"): Xrm.WebResourceControl;
    getControl(controlName: "detailsgrid"): Xrm.SubGridControl<"msdyn_timegroupdetail">;
    getControl(controlName: "msdyn_displaytopxresultsinsatimegroup"): Xrm.NumberControl;
    getControl(controlName: "msdyn_hidebookingtimeonsa"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_interval"): Xrm.NumberControl;
    getControl(controlName: "msdyn_intervalsbegin"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_resetpertimegroupdetail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_resultsperinterval"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
