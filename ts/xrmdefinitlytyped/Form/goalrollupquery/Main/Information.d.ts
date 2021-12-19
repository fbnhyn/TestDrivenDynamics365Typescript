declare namespace Form.goalrollupquery.Main {
  namespace Information {
    namespace Tabs {
      interface rule extends Xrm.SectionCollectionBase {
        get(name: "Rule Conditions"): Xrm.PageSection;
        get(name: "criteria"): Xrm.PageSection;
        get(name: "section 1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "queryentitytype"): Xrm.OptionSetAttribute<number>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "name"): Xrm.StringControl;
      get(name: "name_uc"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "queryeditor_uc"): Xrm.BaseControl;
      get(name: "queryentitytype"): Xrm.OptionSetControl<number>;
      get(name: "queryentitytype_uc"): Xrm.StringControl;
      get(name: "ruleconditioncontrol"): Xrm.IFrameControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "rule"): Xrm.PageTab<Tabs.rule>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "queryentitytype"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "name_uc"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "queryeditor_uc"): Xrm.BaseControl;
    getControl(controlName: "queryentitytype"): Xrm.OptionSetControl<number>;
    getControl(controlName: "queryentitytype_uc"): Xrm.StringControl;
    getControl(controlName: "ruleconditioncontrol"): Xrm.IFrameControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
