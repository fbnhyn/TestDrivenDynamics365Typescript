declare namespace Form.msdyn_resourcerequest.QuickCreate {
  namespace QuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_requestedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_resourcerequest_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_requestedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "statuscode"): Xrm.OptionSetControl<msdyn_resourcerequest_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreate extends Xrm.PageBase<QuickCreate.Attributes,QuickCreate.Tabs,QuickCreate.Controls> {
    getAttribute(attributeName: "msdyn_requestedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_resourcerequest_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_requestedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msdyn_resourcerequest_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
