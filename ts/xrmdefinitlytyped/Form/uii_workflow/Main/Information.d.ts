declare namespace Form.uii_workflow.Main {
  namespace Information {
    namespace Tabs {
      interface _09646b073d6f4d32afe9d4e0d4eab773 extends Xrm.SectionCollectionBase {
        get(name: "{cdab4986-a675-4c28-a71c-dfd6cd9dc956}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface eeeb4b5801364906af09b4875ad7374b extends Xrm.SectionCollectionBase {
        get(name: "{f5299ba8-8cb6-4375-9982-f1ecefe5cad4}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_workflow_statecode>;
      get(name: "uii_description"): Xrm.Attribute<string>;
      get(name: "uii_isforcedworkflow"): Xrm.OptionSetAttribute<boolean>;
      get(name: "uii_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_workflow_statecode>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "uii_description"): Xrm.StringControl;
      get(name: "uii_isforcedworkflow"): Xrm.OptionSetControl<boolean>;
      get(name: "uii_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{09646b07-3d6f-4d32-afe9-d4e0d4eab773}"): Xrm.PageTab<Tabs._09646b073d6f4d32afe9d4e0d4eab773>;
      get(name: "{eeeb4b58-0136-4906-af09-b4875ad7374b}"): Xrm.PageTab<Tabs.eeeb4b5801364906af09b4875ad7374b>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_workflow_statecode>;
    getAttribute(attributeName: "uii_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_isforcedworkflow"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "uii_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_workflow_statecode>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "uii_description"): Xrm.StringControl;
    getControl(controlName: "uii_isforcedworkflow"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "uii_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
