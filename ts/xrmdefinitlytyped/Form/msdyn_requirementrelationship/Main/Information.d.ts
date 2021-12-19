declare namespace Form.msdyn_requirementrelationship.Main {
  namespace Information {
    namespace Tabs {
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentrequirementrelationshipid"): Xrm.LookupAttribute<"msdyn_requirementrelationship">;
      get(name: "msdyn_resourcegroupings"): Xrm.MultiSelectOptionSetAttribute<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ChildRequirementsRelationship"): Xrm.SubGridControl<"msdyn_requirementrelationship">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_parentrequirementrelationshipid"): Xrm.LookupControl<"msdyn_requirementrelationship">;
      get(name: "msdyn_resourcegroupings"): Xrm.MultiSelectOptionSetControl<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentrequirementrelationshipid"): Xrm.LookupAttribute<"msdyn_requirementrelationship">;
    getAttribute(attributeName: "msdyn_resourcegroupings"): Xrm.MultiSelectOptionSetAttribute<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ChildRequirementsRelationship"): Xrm.SubGridControl<"msdyn_requirementrelationship">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentrequirementrelationshipid"): Xrm.LookupControl<"msdyn_requirementrelationship">;
    getControl(controlName: "msdyn_resourcegroupings"): Xrm.MultiSelectOptionSetControl<msdyn_msdyn_requirementrelationship_msdyn_resourcegroupings>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
