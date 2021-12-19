declare namespace Form.msdyn_skillattachmentruleitem.Main {
  namespace Information {
    namespace Tabs {
      interface _281e11cb62674627933d5a4f33806a41 extends Xrm.SectionCollectionBase {
        get(name: "{281e11cb-6267-4627-933d-5a4f33806a41}_section_2"): Xrm.PageSection;
        get(name: "{281e11cb-6267-4627-933d-5a4f33806a41}_section_3"): Xrm.PageSection;
        get(name: "{fa62c8c4-2407-4b68-b9d3-f1354da2ac3f}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_condition"): Xrm.Attribute<string>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_liveworkstream"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AttachSkills"): Xrm.SubGridControl<"msdyn_skillattachmenttarget">;
      get(name: "msdyn_condition"): Xrm.StringControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_liveworkstream"): Xrm.LookupControl<"msdyn_liveworkstream">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{281e11cb-6267-4627-933d-5a4f33806a41}"): Xrm.PageTab<Tabs._281e11cb62674627933d5a4f33806a41>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_condition"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_liveworkstream"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AttachSkills"): Xrm.SubGridControl<"msdyn_skillattachmenttarget">;
    getControl(controlName: "msdyn_condition"): Xrm.StringControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_liveworkstream"): Xrm.LookupControl<"msdyn_liveworkstream">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
