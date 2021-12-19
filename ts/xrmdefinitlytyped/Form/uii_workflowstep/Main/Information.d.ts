declare namespace Form.uii_workflowstep.Main {
  namespace Information {
    namespace Tabs {
      interface _080d630e8f554e0b93f0102387cd98b6 extends Xrm.SectionCollectionBase {
        get(name: "{4be7b1cc-9622-4b8a-84c7-d492f17f3433}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface d9b6f1cf99a44bc997d52f0134f08cd1 extends Xrm.SectionCollectionBase {
        get(name: "{52123abb-abe5-4404-a906-b991b61df58e}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_workflowstep_statecode>;
      get(name: "uii_actionid"): Xrm.LookupAttribute<"uii_action">;
      get(name: "uii_description"): Xrm.Attribute<string>;
      get(name: "uii_hostedapplicationworkflowstepid"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "uii_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_workflowstep_statecode>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "uii_actionid"): Xrm.LookupControl<"uii_action">;
      get(name: "uii_description"): Xrm.StringControl;
      get(name: "uii_hostedapplicationworkflowstepid"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "uii_name"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{080d630e-8f55-4e0b-93f0-102387cd98b6}"): Xrm.PageTab<Tabs._080d630e8f554e0b93f0102387cd98b6>;
      get(name: "{d9b6f1cf-99a4-4bc9-97d5-2f0134f08cd1}"): Xrm.PageTab<Tabs.d9b6f1cf99a44bc997d52f0134f08cd1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_workflowstep_statecode>;
    getAttribute(attributeName: "uii_actionid"): Xrm.LookupAttribute<"uii_action">;
    getAttribute(attributeName: "uii_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_hostedapplicationworkflowstepid"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "uii_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_workflowstep_statecode>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "uii_actionid"): Xrm.LookupControl<"uii_action">;
    getControl(controlName: "uii_description"): Xrm.StringControl;
    getControl(controlName: "uii_hostedapplicationworkflowstepid"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "uii_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
