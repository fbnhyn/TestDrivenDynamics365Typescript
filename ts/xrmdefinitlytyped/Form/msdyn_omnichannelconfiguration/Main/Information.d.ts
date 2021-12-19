declare namespace Form.msdyn_omnichannelconfiguration.Main {
  namespace Information {
    namespace Tabs {
      interface tab_skillbasedrouting_new extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1_2"): Xrm.PageSection;
        get(name: "tab_skillbasedrouting_section_2_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_isskillbasedroutingenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_isupdateskillsenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RatingModelDetails"): Xrm.SubGridControl<"ratingmodel">;
      get(name: "msdyn_isskillbasedroutingenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_isupdateskillsenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_skillbasedrouting_new"): Xrm.PageTab<Tabs.tab_skillbasedrouting_new>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_isskillbasedroutingenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_isupdateskillsenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RatingModelDetails"): Xrm.SubGridControl<"ratingmodel">;
    getControl(controlName: "msdyn_isskillbasedroutingenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_isupdateskillsenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
