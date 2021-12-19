declare namespace Form.msdyn_playbookactivity.Main {
  namespace Information {
    namespace Tabs {
      interface documents_sharepoint extends Xrm.SectionCollectionBase {
        get(name: "documents_sharepoint_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_activityLogicalName"): Xrm.LookupAttribute<"NoAttributeTargets">;
      get(name: "msdyn_playbookactivity_json"): Xrm.Attribute<string>;
      get(name: "msdyn_subject"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
      get(name: "msdyn_activityLogicalName"): Xrm.LookupControl<"NoAttributeTargets">;
      get(name: "msdyn_subject"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "playbookactivity_control"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "documents_sharepoint"): Xrm.PageTab<Tabs.documents_sharepoint>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_activityLogicalName"): Xrm.LookupAttribute<"NoAttributeTargets">;
    getAttribute(attributeName: "msdyn_playbookactivity_json"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "DocumentsSubGrid"): Xrm.SubGridControl<"sharepointdocument">;
    getControl(controlName: "msdyn_activityLogicalName"): Xrm.LookupControl<"NoAttributeTargets">;
    getControl(controlName: "msdyn_subject"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "playbookactivity_control"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
