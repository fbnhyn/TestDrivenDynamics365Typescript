declare namespace Form.uii_workflow_workflowstep_mapping.Main {
  namespace Information {
    namespace Tabs {
      interface _7fc9cac993a247ac9b0192e75a065880 extends Xrm.SectionCollectionBase {
        get(name: "{915420ca-99b8-47ea-bc0e-a10f42a59e41}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface a0f2abd0c66b4eb0b939ebb9ecaa26cd extends Xrm.SectionCollectionBase {
        get(name: "{df2f3fc6-6a97-48e7-bd1a-6bd55b1b06cb}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_workflow_workflowstep_mapping_statecode>;
      get(name: "uii_sequence"): Xrm.Attribute<string>;
      get(name: "uii_workflow_mappingid"): Xrm.LookupAttribute<"uii_workflow">;
      get(name: "uii_workflowstep_mappingid"): Xrm.LookupAttribute<"uii_workflowstep">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_workflow_workflowstep_mapping_statecode>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "uii_sequence"): Xrm.StringControl;
      get(name: "uii_workflow_mappingid"): Xrm.LookupControl<"uii_workflow">;
      get(name: "uii_workflowstep_mappingid"): Xrm.LookupControl<"uii_workflowstep">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{7fc9cac9-93a2-47ac-9b01-92e75a065880}"): Xrm.PageTab<Tabs._7fc9cac993a247ac9b0192e75a065880>;
      get(name: "{a0f2abd0-c66b-4eb0-b939-ebb9ecaa26cd}"): Xrm.PageTab<Tabs.a0f2abd0c66b4eb0b939ebb9ecaa26cd>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_workflow_workflowstep_mapping_statecode>;
    getAttribute(attributeName: "uii_sequence"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_workflow_mappingid"): Xrm.LookupAttribute<"uii_workflow">;
    getAttribute(attributeName: "uii_workflowstep_mappingid"): Xrm.LookupAttribute<"uii_workflowstep">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_workflow_workflowstep_mapping_statecode>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "uii_sequence"): Xrm.StringControl;
    getControl(controlName: "uii_workflow_mappingid"): Xrm.LookupControl<"uii_workflow">;
    getControl(controlName: "uii_workflowstep_mappingid"): Xrm.LookupControl<"uii_workflowstep">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
