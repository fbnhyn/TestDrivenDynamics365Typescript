declare namespace Form.msdyn_projectteam.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "General_section_2"): Xrm.PageSection;
        get(name: "{dc58eba6-d467-4b9a-aad8-0c471ebde29f}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Proposed_Resources extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Resource_Requirement extends Xrm.SectionCollectionBase {
        get(name: "RequirementSection"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: "tab_2_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_bookableresourceid"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_from"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_organizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_projectapprover"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "msdyn_roledescription"): Xrm.Attribute<string>;
      get(name: "msdyn_to"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_ProposalScheduleBoard"): Xrm.IFrameControl;
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_bookableresourceid"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_from"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_organizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_projectapprover"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "msdyn_roledescription"): Xrm.StringControl;
      get(name: "msdyn_to"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: "Proposed_Resources"): Xrm.PageTab<Tabs.Proposed_Resources>;
      get(name: "Resource_Requirement"): Xrm.PageTab<Tabs.Resource_Requirement>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_bookableresourceid"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_from"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_organizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_projectapprover"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "msdyn_roledescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_to"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_ProposalScheduleBoard"): Xrm.IFrameControl;
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_bookableresourceid"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_from"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_organizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_projectapprover"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "msdyn_roledescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_to"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
