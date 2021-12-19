declare namespace Form.routingruleitem.Main {
  namespace RuleItem {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "ConditionControl"): Xrm.PageSection;
        get(name: "ConditionControl_uc"): Xrm.PageSection;
        get(name: "Rule Item Information"): Xrm.PageSection;
        get(name: "Then Condition"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "assignobjectid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "msdyn_routeto"): Xrm.OptionSetAttribute<msdynce_routingrule_msdyn_routeto>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "routedqueueid"): Xrm.LookupAttribute<"queue">;
      get(name: "routingruleid"): Xrm.LookupAttribute<"routingrule">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "appConditionBuilder_uc"): Xrm.BaseControl;
      get(name: "assignobjectid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_ParentRuleSpacer1"): Xrm.BaseControl;
      get(name: "header_parentroutingruleid"): Xrm.LookupControl<"routingrule">;
      get(name: "msdyn_routeto"): Xrm.OptionSetControl<msdynce_routingrule_msdyn_routeto>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "routedqueueid"): Xrm.LookupControl<"queue">;
      get(name: "routeoption"): Xrm.OptionSetControl<number>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RuleItem extends Xrm.PageBase<RuleItem.Attributes,RuleItem.Tabs,RuleItem.Controls> {
    getAttribute(attributeName: "assignobjectid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_routeto"): Xrm.OptionSetAttribute<msdynce_routingrule_msdyn_routeto>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "routedqueueid"): Xrm.LookupAttribute<"queue">;
    getAttribute(attributeName: "routingruleid"): Xrm.LookupAttribute<"routingrule">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "appConditionBuilder_uc"): Xrm.BaseControl;
    getControl(controlName: "assignobjectid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_ParentRuleSpacer1"): Xrm.BaseControl;
    getControl(controlName: "header_parentroutingruleid"): Xrm.LookupControl<"routingrule">;
    getControl(controlName: "msdyn_routeto"): Xrm.OptionSetControl<msdynce_routingrule_msdyn_routeto>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "routedqueueid"): Xrm.LookupControl<"queue">;
    getControl(controlName: "routeoption"): Xrm.OptionSetControl<number>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
